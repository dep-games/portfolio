const projects: Project[] = [
  {
    title: {
      en: "Innaly - Hotel Management System",
      es: "Innaly - Sistema de Gestión Hotelera",
    },
    endpoint: "innaly",
    images: [
      {
        src: "/pics/projects/innaly/1.png",
        alt: "Guest-facing homepage with booking widget",
      },
      {
        src: "/pics/projects/innaly/2.png",
        alt: "Hotel services and available rooms",
      },
      {
        src: "/pics/projects/innaly/3.png",
        alt: "Guest testimonials and site footer",
      },
      {
        src: "/pics/projects/innaly/4.png",
        alt: "Room detail page with gallery and amenities",
      },
      {
        src: "/pics/projects/innaly/5.png",
        alt: "Admin reservations list",
      },
      {
        src: "/pics/projects/innaly/6.png",
        alt: "Admin room management",
      },
      {
        src: "/pics/projects/innaly/7.png",
        alt: "Admin guest management",
      },
      {
        src: "/pics/projects/innaly/8.png",
        alt: "Admin payments list",
      },
      {
        src: "/pics/projects/innaly/9.png",
        alt: "Admin reports dashboard",
      },
      {
        src: "/pics/projects/innaly/10.png",
        alt: "Admin staff and roles management",
      },
    ],
    description: {
      en: "Innaly is a hotel management platform with two sides: a guest-facing site where visitors can browse rooms, check availability, and book a stay, and a full admin panel for hotel staff to run day-to-day operations.\n\nFrom the admin panel, staff can manage reservations and rooms (availability, maintenance, and cleaning status), track guests and payments, review occupancy reports, and manage employees with role-based permissions (admin, manager, receptionist). The backend is a Python/FastAPI REST API backed by MySQL, with the whole stack containerized with Docker.",
      es: "Innaly es una plataforma de gestión hotelera con dos lados: un sitio orientado a huéspedes donde pueden explorar habitaciones, revisar disponibilidad y reservar una estadía, y un panel de administración completo para que el personal del hotel maneje la operación diaria.\n\nDesde el panel de administración, el personal puede gestionar reservas y habitaciones (disponibilidad, mantenimiento y estado de limpieza), dar seguimiento a huéspedes y pagos, revisar reportes de ocupación, y administrar empleados con permisos por rol (admin, manager, recepcionista). El backend es una API REST en Python/FastAPI respaldada por MySQL, con todo el stack contenedorizado con Docker.",
    },
    repoLink: "",
    demoLink: "",
    status: "completed",
    techStack: [
      {
        name: "Node.js",
        url: "https://nodejs.org/",
      },
      {
        name: "Python",
        url: "https://www.python.org/",
      },
      {
        name: "FastAPI",
        url: "https://fastapi.tiangolo.com/",
      },
      {
        name: "MySQL",
        url: "https://www.mysql.com/",
      },
      {
        name: "Docker",
        url: "https://www.docker.com/",
      },
    ],
  },
  {
    title: {
      en: "QuickTrips",
      es: "QuickTrips",
    },
    endpoint: "quicktrips",
    images: [
      {
        src: "/pics/projects/quicktrips/1.png",
        alt: "QuickTrips landing page",
      },
      {
        src: "/pics/projects/quicktrips/2.png",
        alt: "Property listings page",
      },
      {
        src: "/pics/projects/quicktrips/3.png",
        alt: "Property detail page with gallery and booking widget",
      },
      {
        src: "/pics/projects/quicktrips/4.png",
        alt: "Property description and amenities",
      },
      {
        src: "/pics/projects/quicktrips/5.png",
        alt: "Property location map and reviews",
      },
      {
        src: "/pics/projects/quicktrips/6.png",
        alt: "User account menu",
      },
    ],
    description: {
      en: "QuickTrips is a property-rental platform that connects travelers with unique places to stay around the world. Users can browse detailed listings with photos, amenities, and pricing, book a stay, manage their reservations, and share reviews after their trip. Hosts get their own toolset to publish and manage properties, track bookings, and communicate with guests.\n\nThe platform includes secure card payments, advanced search and filtering by location, price, and amenities, and JWT-based authentication with role-based access for travelers and hosts. It's built with a Node.js/Express backend, a MongoDB database, and a React frontend.",
      es: "QuickTrips es una plataforma de alquiler de propiedades que conecta a viajeros con alojamientos únicos alrededor del mundo. Los usuarios pueden explorar anuncios detallados con fotos, comodidades y precios, reservar una estadía, gestionar sus reservaciones y compartir reseñas después de su viaje. Los anfitriones cuentan con sus propias herramientas para publicar y administrar propiedades, dar seguimiento a las reservas y comunicarse con los huéspedes.\n\nLa plataforma incluye pagos seguros con tarjeta, búsqueda avanzada con filtros por ubicación, precio y comodidades, y autenticación basada en JWT con acceso diferenciado por roles para viajeros y anfitriones. Está construida con un backend en Node.js/Express, base de datos MongoDB y frontend en React.",
    },
    repoLink: "",
    demoLink: "",
    status: "completed",
    techStack: [
      {
        name: "Node.js",
        url: "https://nodejs.org/",
      },
      {
        name: "Express.js",
        url: "https://expressjs.com/",
      },
      {
        name: "MongoDB",
        url: "https://www.mongodb.com/",
      },
      {
        name: "React",
        url: "https://react.dev/",
      },
      {
        name: "JWT",
        url: "https://jwt.io/",
      },
    ],
  },
  {
    title: {
      en: "Inventory Management System",
      es: "Sistema de Inventario",
    },
    endpoint: "inventory-system",
    images: [
      {
        src: "/pics/projects/inventory-system/1.png",
        alt: "Inventory management dashboard",
      },
    ],
    description: {
      en: "A full inventory management system built to streamline stock control for an organization. Users can create, edit, and remove inventory items while tracking key details such as quantity, category, supplier, and entry/exit dates. Every change is logged as a stock movement (entry, exit, or adjustment), building a complete, auditable history of who made each change and when.\n\nAccess is secured through Active Directory authentication, with roles and permissions (administrator, standard user) managed directly through AD groups. The system also generates automated inventory reports covering available stock and critical items, delivering them by email on a scheduled basis (daily, weekly, or monthly) through a configured SMTP server.\n\nThe frontend, built with Flutter, includes a dashboard with filters by category, quantity, and date, a form for adding or editing products, a movement history screen, and AD-based login. The backend is a REST API built with .NET/C#, handling inventory CRUD, AD authentication, automated report generation, and fully audited movement tracking, backed by a SQL Server database for inventory, movements, and users.",
      es: "Un sistema completo de gestión de inventarios pensado para simplificar el control de stock de una organización. Los usuarios pueden crear, editar y eliminar elementos del inventario, dando seguimiento a datos clave como cantidad, categoría, proveedor y fechas de entrada/salida. Cada cambio queda registrado como un movimiento de inventario (entrada, salida o ajuste), generando un historial completo y auditable de quién hizo cada modificación y cuándo.\n\nEl acceso está protegido mediante autenticación con Active Directory, gestionando roles y permisos (administrador, usuario estándar) directamente a través de los grupos de AD. El sistema también genera reportes automáticos de inventario, con el estado del stock disponible y los productos críticos, enviándolos por correo electrónico de forma programada (diaria, semanal o mensual) mediante un servidor SMTP configurado.\n\nEl frontend, construido con Flutter, incluye un dashboard con filtros por categoría, cantidad y fecha, un formulario para agregar o editar productos, una pantalla de historial de movimientos y login mediante AD. El backend es una API REST desarrollada en .NET/C#, encargada del CRUD de inventario, la autenticación con AD, la generación automática de reportes y el registro de movimientos con auditoría completa, respaldado por una base de datos SQL Server para inventario, movimientos y usuarios.",
    },
    repoLink: "https://github.com/ISC-UPA/2024-3-ISC06-01-Sistema-de-Inventario",
    demoLink: "",
    status: "completed",
    techStack: [
      {
        name: "Dart",
        url: "https://dart.dev/",
      },
      {
        name: "Flutter",
        url: "https://flutter.dev/",
      },
      {
        name: "C#",
        url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
      },
      {
        name: ".NET",
        url: "https://dotnet.microsoft.com/",
      },
      {
        name: "SQL Server",
        url: "https://www.microsoft.com/en-us/sql-server",
      },
    ],
  },
  {
    title: {
      en: "Repair Management Software",
      es: "Software de Gestión de Reparación de Equipos",
    },
    endpoint: "pos",
    images: [
      {
        src: "/pics/projects/pos/1.jpg",
        alt: "",
      },
      {
        src: "/pics/projects/pos/2.jpg",
        alt: "",
      },
      {
        src: "/pics/projects/pos/3.png",
        alt: "",
      }
    ],
    description: {
      en: "A cross-platform application built with Flutter for managing the repair of technological devices, from intake to delivery. Staff can register devices, attach photos of their condition, and generate receipts for customers.\n\nData is synced to Firebase, giving the app cloud storage and real-time access from any device, so repair status and history stay up to date wherever the team is working.\n\nThe system supports multiple users with different permission levels, keeping administration efficient and secure across the whole repair workflow.",
      es: "Aplicación multiplataforma desarrollada en Flutter para la gestión de equipos tecnológicos en reparación, desde su recepción hasta la entrega. El personal puede registrar dispositivos, adjuntar fotos de su estado y generar recibos para los clientes.\n\nLos datos se sincronizan con Firebase, lo que le da a la aplicación almacenamiento en la nube y acceso en tiempo real desde cualquier dispositivo, manteniendo actualizado el estado y el historial de reparaciones estando donde esté el equipo.\n\nEl sistema soporta múltiples usuarios con diferentes niveles de permisos, manteniendo una administración eficiente y segura en todo el flujo de reparación.",
    },
    repoLink: "",
    demoLink: "",
    status: "completed",
    techStack: [
      { 
        name: "Dart",
        url: "https://dart.dev/"
      },
      {
        name: "Flutter",
        url: "https://flutter.dev/"
      },
      {
        name: "SQLite",
        url: "https://www.sqlite.org/index.html",
      },
      {
        name: "Firebase",
        url: "https://firebase.google.com/",
      }
    ],
  },
  {
    title: {
      en: "Polish Notation Calculator Application",
      es: "Aplicación de Calculadora con Notación Polaca",
    },
    endpoint: "calculator",
    images: [
      {
        src: "/pics/projects/calculator/1.png",
        alt: "Testimonial Grid Preview",
      }
    ],
    description: {
      en: "A Java-based calculator application that uses Polish notation (also known as prefix notation) for arithmetic operations.",
      es: "Aplicación de calculadora basada en Java que utiliza notación polaca (también conocida como notación prefija) para operaciones aritméticas.",
    },
    repoLink: "",
    status: "completed",
    techStack: [
      {
        name: "Java",
        url: "https://www.java.com/",
      }
    ],
  },
];

export default projects;
