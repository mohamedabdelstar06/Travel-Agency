
# Travello - AI-Powered Travel Agency Dashboard

A modern, full-stack travel agency application built with React Router that combines AI-powered trip generation with comprehensive administrative capabilities. 
## 🚀 Features

### Admin Dashboard
- **Real-time Analytics**: User growth metrics, trip statistics, and data visualization 
- **User Management**: Complete admin interface for managing user accounts 
- **Trip Management**: Create, view, and manage AI-generated travel itineraries
- **Role-based Access Control**: Secure admin-only access with authentication 

### AI-Powered Trip Generation
- **Google Generative AI Integration**: Intelligent travel itinerary creation  
- **Dynamic Image Integration**: Automatic travel destination images via Unsplash API  
- **Interactive Maps**: Geographic visualization using Syncfusion Maps 

## 🛠️ Tech Stack

### Frontend
- **React Router 7.7.1** - Modern full-stack React framework
- **React 19.1.0** - Latest React with concurrent features 
- **TypeScript** - Type-safe development 
- **Tailwind CSS 4.1.4** - Utility-first styling 

### Backend & Services
- **Appwrite 18.2.0** - Backend-as-a-Service for auth, database, and storage
- **Google Generative AI** - AI-powered trip generation 

### UI Components
- **Syncfusion EJ2** - Professional UI components for charts, grids, and navigation 

### Monitoring
- **Sentry** - Error tracking and performance monitoring 

## 🏗️ Architecture

```mermaid
graph TB
    subgraph "Frontend (React Router)"
        Auth[Authentication]
        Dashboard[Admin Dashboard]
        TripMgmt[Trip Management]
        UserMgmt[User Management]
    end
    
    subgraph "Backend Services"
        Appwrite[Appwrite Database]
        GoogleAI[Google Generative AI]
        Unsplash[Unsplash API]
    end
    
    subgraph "UI Framework"
        Syncfusion[Syncfusion EJ2 Components]
        Tailwind[Tailwind CSS]
    end
    
    Auth --> Appwrite
    Dashboard --> Appwrite
    TripMgmt --> GoogleAI
    TripMgmt --> Unsplash
    TripMgmt --> Appwrite
    UserMgmt --> Appwrite
    
    Dashboard --> Syncfusion
    TripMgmt --> Syncfusion
    UserMgmt --> Syncfusion
```

## 🚦 Getting Started

### Prerequisites
- Node.js 20+ 
- npm or yarn
- Appwrite account and project setup
- Google AI API key
- Unsplash API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohamedabdelstar06/Travel-Agency.git
   cd Travel-Agency
   ```

2. **Install dependencies**
   ```bash
   npm install
   ``` [16](#0-15) 

3. **Environment Setup**
   Create a `.env` file with your API keys:
   ```env
   GOOGLE_AI_API_KEY=your_google_ai_key
   UNSPLASH_ACCESS_KEY=your_unsplash_key
   APPWRITE_PROJECT_ID=your_appwrite_project_id
   APPWRITE_DATABASE_ID=your_database_id
   ```

4. **Start development server**
   ```bash
   npm run dev
   ``` [17](#0-16) 

## 📦 Build & Deployment

### Production Build

```bash
npm run build
``` 

### Docker Deployment
```bash
docker build -t Travello .
docker run -p 3000:3000 Travello
``` 

### Supported Platforms
- AWS ECS
- Google Cloud Run  
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway 

## 🎯 Key Features Deep Dive

### Admin Dashboard Analytics
The dashboard provides comprehensive analytics with real-time data visualization: 

- User growth tracking with combined column and spline area charts
- Trip trends analysis by travel style
- Monthly statistics comparison
- Interactive data grids for users and trips

### AI Trip Generation
Intelligent trip planning powered by Google's Generative AI: 

- Personalized itinerary creation
- Automatic image sourcing
- Travel style categorization
- Budget and group type optimization

### Security & Authentication
Role-based access control ensures admin-only access: 

- Google OAuth integration
- Session validation
- User role verification
- Automatic redirects for unauthorized access

## 📁 Project Structure

```
├── app/
│   ├── routes/
│   │   ├── Admin/           # Admin dashboard routes
│   │   ├── api/             # API endpoints
│   │   └── root/            # Public routes
│   ├── appwrite/            # Backend service integration
│   └── lib/                 # Utilities and helpers
├── Components/              # Reusable UI components
└── public/                  # Static assets
``` 

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- [React Router Documentation](https://reactrouter.com/)
- [Syncfusion Components](https://ej2.syncfusion.com/react/documentation/)
- [Appwrite Documentation](https://appwrite.io/docs)
- [Google AI Documentation](https://ai.google.dev/docs)

---

Built with ❤️ using React Router and modern web technologies. [25](#0-24) 
