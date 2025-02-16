// In-memory storage
const defaultHotels = {
  "hotels": [
    {
        "id": "1",
        "name": "Sunset Resort",
        "description": "Beautiful beachfront resort with stunning views",
        "price": 0.002,
        "location": "Miami Beach",
        "availableDates": [],
        "bookings": [
          {
            "id": "042d7ae4-f1d8-4a07-8719-73dd12054047",
            "userId": "user123",
            "checkIn": "2025-02-20",
            "checkOut": "2025-02-21",
            "guests": 1,
            "totalPrice": 200
          }
        ]
      },
      {
        "id": "2",
        "name": "Mountain Lodge",
        "description": "Cozy mountain retreat with scenic views",
        "price": 0.001,
        "location": "Aspen",
        "availableDates": [],
        "bookings": [
          {
            "id": "65887ecd-d9be-405a-8ff6-70d9a7b31c90",
            "userId": "user123",
            "checkIn": "2025-03-20",
            "checkOut": "2025-03-22",
            "guests": 1,
            "totalPrice": 300
          }
        ]
      },
      {
        "id": "3",
        "name": "Urban Oasis Hotel",
        "description": "Modern luxury hotel in the heart of downtown",
        "price": 0.001,
        "location": "New York City",
        "availableDates": [
          "2025-03-15",
          "2025-03-16",
          "2025-03-17"
        ],
        "bookings": []
      },
      {
        "id": "4",
        "name": "Desert Palm Resort",
        "description": "Luxurious desert retreat with spa facilities",
        "price": 0.001,
        "location": "Phoenix",
        "availableDates": [
          "2025-03-18",
          "2025-03-19",
          "2025-03-20"
        ],
        "bookings": []
      },
      {
        "id": "5",
        "name": "Lakeside Inn",
        "description": "Peaceful lakefront property with water activities",
        "price": 0.001,
        "location": "Lake Tahoe",
        "availableDates": [
          "2025-03-22",
          "2025-03-23",
          "2025-03-24"
        ],
        "bookings": []
      },
      {
        "id": "6",
        "name": "Historic Downtown Hotel",
        "description": "Boutique hotel in a restored historic building",
        "price": 0.0043,
        "location": "Charleston",
        "availableDates": [
          "2025-03-25",
          "2025-03-26",
          "2025-03-27"
        ],
        "bookings": []
      },
      {
        "id": "7",
        "name": "Pacific View Resort",
        "description": "Oceanfront resort with private beach access",
        "price": 0.001,
        "location": "Maui",
        "availableDates": [
          "2025-03-28",
          "2025-03-29",
          "2025-03-30"
        ],
        "bookings": []
      },
      {
        "id": "8",
        "name": "Alpine Ski Lodge",
        "description": "Ski-in/ski-out lodge with mountain views",
        "price": 0.004,
        "location": "Vail",
        "availableDates": [
          "2025-04-01",
          "2025-04-02",
          "2025-04-03"
        ],
        "bookings": []
      },
      {
        "id": "9",
        "name": "City Lights Hotel",
        "description": "High-rise hotel with skyline views",
        "price": 0.001,
        "location": "Chicago",
        "availableDates": [
          "2025-04-04",
          "2025-04-05",
          "2025-04-06"
        ],
        "bookings": []
      },
      {
        "id": "10",
        "name": "Vineyard Estate",
        "description": "Luxury hotel surrounded by wine country",
        "price": 0.001,
        "location": "Napa Valley",
        "availableDates": [
          "2025-04-07",
          "2025-04-08",
          "2025-04-09"
        ],
        "bookings": []
      },
      {
        "id": "11",
        "name": "French Quarter Inn",
        "description": "Historic hotel with traditional charm",
        "price": 0.004,
        "location": "New Orleans",
        "availableDates": [
          "2025-04-10",
          "2025-04-11",
          "2025-04-12"
        ],
        "bookings": []
      },
      {
        "id": "12",
        "name": "Emerald Bay Resort",
        "description": "Tropical paradise with private lagoon",
        "price": 0.001,
        "location": "Bora Bora",
        "availableDates": [
          "2025-04-13",
          "2025-04-14",
          "2025-04-15"
        ],
        "bookings": []
      },
      {
        "id": "13",
        "name": "Metropolitan Suite Hotel",
        "description": "All-suite hotel with business amenities",
        "price": 0.002,
        "location": "Boston",
        "availableDates": [
          "2025-04-16",
          "2025-04-17",
          "2025-04-18"
        ],
        "bookings": []
      },
      {
        "id": "14",
        "name": "Ranch Resort",
        "description": "Western-style resort with horseback riding",
        "price": 0.002,
        "location": "Montana",
        "availableDates": [
          "2025-04-19",
          "2025-04-20",
          "2025-04-21"
        ],
        "bookings": []
      },
      {
        "id": "15",
        "name": "Coastal Breeze Hotel",
        "description": "Relaxed beachside hotel with water sports",
        "price": 0.001,
        "location": "San Diego",
        "availableDates": [
          "2025-04-22",
          "2025-04-23",
          "2025-04-24"
        ],
        "bookings": []
      },
      {
        "id": "16",
        "name": "Garden Court Hotel",
        "description": "Boutique hotel with landscaped gardens",
        "price": 0.001,
        "location": "Portland",
        "availableDates": [
          "2025-04-25",
          "2025-04-26",
          "2025-04-27"
        ],
        "bookings": []
      },
      {
        "id": "17",
        "name": "Island Paradise Resort",
        "description": "Luxury island resort with private villas",
        "price": 0.001,
        "location": "Maldives",
        "availableDates": [
          "2025-04-28",
          "2025-04-29",
          "2025-04-30"
        ],
        "bookings": []
      },
      {
        "id": "18",
        "name": "Snow Peak Lodge",
        "description": "Mountain resort with hot springs",
        "price": 0.001,
        "location": "Swiss Alps",
        "availableDates": [
          "2025-05-01",
          "2025-05-02",
          "2025-05-03"
        ],
        "bookings": []
      },
      {
        "id": "19",
        "name": "Harbor View Hotel",
        "description": "Waterfront hotel with marina access",
        "price": 0.001,
        "location": "Singapore",
        "availableDates": [
          "2025-03-24",
          "2025-05-04",
          "2025-05-05",
          "2025-05-06"
        ],
        "bookings": []
      },
      {
        "id": "19.5",
        "name": "Slutty Sea View Hotel",
        "description": "Waterfront hotel with marina access",
        "price": 0.001,
        "location": "Seattle",
        "availableDates": [
          "2025-05-04",
          "2025-05-05",
          "2025-05-06",
          "2025-05-07",
          "2025-05-08",
          "2025-05-09"
        ],
        "bookings": []
      },
      {
        "id": "20",
        "name": "Desert Oasis Resort",
        "description": "Luxury desert resort with golf course",
        "price": 0.003,
        "location": "Dubai",
        "availableDates": [
          "2025-05-07",
          "2025-05-08",
          "2025-05-09"
        ],
        "bookings": []
      }
  ]
};

// Initialize Map with default data
let hotels = new Map(
  defaultHotels.hotels.map(hotel => [hotel.id, hotel])
);

export async function getHotelById(id: string) {
  return hotels.get(id);
}

export async function bookHotel(hotelId: string, booking: any) {
  const hotel = hotels.get(hotelId);
  if (!hotel) throw new Error('Hotel not found');
  // Add booking
  hotel.bookings = [...hotel.bookings, booking];
  
  // Update available dates
  hotel.availableDates = hotel.availableDates.filter((date: string) => 
    date < booking.checkIn || date > booking.checkOut
  );
  
  // Update the hotel in storage
  hotels.set(hotelId, hotel);
  
  return booking;
}

export const getAllHotels = async () => {
  // Implementation here
  return Array.from(hotels.values());
  return []; // Replace with actual implementation
};