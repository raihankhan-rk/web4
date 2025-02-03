import { HumanMessage } from "@langchain/core/messages";
import { MemorySaver } from "@langchain/langgraph";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { ChatOpenAI } from "@langchain/openai";
import { createAgentCommunicationTool, createAgentDiscoveryTool, createMultiAgentCommunicationTool } from "./tools.js";
import { DEFAULT_SYSTEM_PROMPT } from "./prompts.js";

export class OrchestratorAgent {
    constructor(config, protocol) {
        this.config = config;
        this.protocol = protocol;
        this.memory = new MemorySaver();
        this.agent = null;
        // Add default runnable config
        this.runnableConfig = {
            configurable: {
                thread_id: "Orchestrator_Agent",
                metadata: {
                    agent_type: "orchestrator",
                },
            },
        };
    }

    async initialize() {
        const llm = new ChatOpenAI({
            model: this.config.model || "gpt-4o-mini",
            temperature: 0.7,
        });

        const tools = [
            createAgentCommunicationTool(this.protocol),
            createMultiAgentCommunicationTool(this.protocol),
            createAgentDiscoveryTool(this.protocol),
        ];

        this.agent = createReactAgent({
            llm,
            tools,
            checkpointSaver: this.memory,
            messageModifier: DEFAULT_SYSTEM_PROMPT,
        });
    }

    async handleMessage(message) {
        try {
            const stream = await this.agent.stream(
                { messages: [new HumanMessage(message)] },
                this.runnableConfig,  // Use the runnable config here
            );

            let response = "";
            for await (const chunk of stream) {
                if ("agent" in chunk) {
                    response += chunk.agent.messages[0].content + "\n";
                } else if ("tools" in chunk) {
                    response += chunk.tools.messages[0].content + "\n";
                }
            }

            return {
                type: "response",
                content: response.trim(),
            };
        } catch (error) {
            return {
                type: "error",
                content: `Error processing request: ${
                    error instanceof Error ? error.message : "Unknown error"
                }`,
            };
        }
    }

    getPendingResponses() {
        return this.protocol.pendingResponses;
    }
}