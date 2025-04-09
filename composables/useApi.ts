import useRequestCenter from "./useRequests";

export const useApi = {
    // SignUp & Login
    sendOtp: useRequestCenter('Users/SendOtp', 'POST'),
    sendForgetPassOtp: useRequestCenter('Users/SendForgetPassOtp', 'POST'),
    registerDriver: useRequestCenter('IdentityManager/RegisterDriver', 'POST'),
    registerParent: useRequestCenter('IdentityManager/RegisterParent', 'POST'),
    updateParent: useRequestCenter('IdentityManager/UpdateParent', 'PUT'),
    driverAuthenticationRequest: useRequestCenter('AuthenticationDriver/AuthenticationRequest', 'POST'),
    getTokenByPhone: useRequestCenter('Users/TokenByPhone', 'POST'),
    login: useRequestCenter('Users/Token', 'POST'),
    resetPasswordByOtp: useRequestCenter('Users/ResetPasswordByOtp', 'POST'),
    // Media
    upload: useRequestCenter('Upload/Upload', 'POST'),
    // Driver
    getDriverStatus: useRequestCenter('Driver/GetDriverStatus', 'GET'),
    getDriverInformation: useRequestCenter('Driver/GetDriverInformation', 'GET'),
    getDriverPackages: useRequestCenter('Driver/GetDriverPackages', 'GET'),
    // Student
    getAllStudents: useRequestCenter('Student/GetAll', 'GET'),
    insertStudent: useRequestCenter('Student/Insert', 'POST'),
    updateStudent: useRequestCenter('Student/Update', 'PUT'),
    // School
    getAllSchools: useRequestCenter('School/GetAll', 'GET'),
    getPrePaymentByStudentId: useRequestCenter('School/GetPrePaymentByStudentId', 'GET'),
    // SchoolServiceRequest
    schoolServiceRequest: useRequestCenter('SchoolServiceRequest/SchoolServiceRequest', 'POST'),
    // Payment
    sendMyPayment: useRequestCenter('Payment/SendMyPayment', 'POST'),
    // Cars
    getCarsByDriverId: useRequestCenter('Car/GetCarsByDriverId', 'GET'),
    insertCar: useRequestCenter('Car/InsertCar', 'POST'),
    updateCar: useRequestCenter('Car/UpdateCar', 'PUT'),
    // Users
    getByToken: useRequestCenter('Users/GetByToken', 'GET'),
    // FAQ
    getAllFAQ: useRequestCenter('FAQ/GetAll', 'GET'),
    getByFAQ: useRequestCenter('FAQ/GetBy', 'GET'),
    // Locations
    getStudentsLocationByPackageId: useRequestCenter('Locations/GetStudentsLocationByPackageId', 'GET'),
    // Trip
    createTrip: useRequestCenter('Trip/Create', 'POST'),
    setCuurentTripLocation: useRequestCenter('Trip/SetCuurentTripLocation', 'POST'),
    getCurrentLocation: useRequestCenter('Trip/GetCurrentLocation', 'POST'),
    setPresentForStudent: useRequestCenter('Trip/SetPresentForStudent', 'PUT'),
    setDelayPresentForStudent: useRequestCenter('Trip/SetDelayPresentForStudent', 'PUT'),
    setAbsentForStudent: useRequestCenter('Trip/SetAbsentForStudent', 'PUT'),
    setArriveForTrips: useRequestCenter('Trip/SetArriveForTrips', 'PUT'),
    setDismountedForStudent: useRequestCenter('Trip/SetDismountedForStudent', 'PUT'),
    getAllByStudentId: useRequestCenter('Trip/GetAllByStudentId', 'GET'),
    getDriverTrips: useRequestCenter('Trip/GetDriverTrips', 'GET'),
    getDriverTripsByDate: useRequestCenter('Trip/GetByDate', 'GET'),
    getTripById: useRequestCenter('Trip/GetById', 'GET'),
    // InstallmentPayment
    installmentPaymentGetByStudentId: useRequestCenter('InstallmentPayment/GetByStudentId', 'GET'),
    sendPaymentRecipt: useRequestCenter('InstallmentPayment/SendPaymentRecipt', 'POST'),
    // Tickets
    getMyTickets: useRequestCenter('Tickets/GetMyTickets', 'GET'),
    createTickets: useRequestCenter('Tickets', 'POST'),
    createTicketsAnswer: useRequestCenter('Tickets/Answer', 'POST'),
    getTickets: useRequestCenter('Tickets', 'GET'),
    // IdentityManager
    updateDriver: useRequestCenter('IdentityManager/UpdateDriver', 'PUT'),
    // Interaction
    createInteraction: useRequestCenter('Interaction/Create', 'POST'),
    // Portfolio
    getAllPortfolio: useRequestCenter('PortFolio/GetAll', 'GET'),
    getBySeoTitlePortfolio: useRequestCenter('PortFolio/GetBySeoUrl', 'GET'),
    // Blogs
    getBlogById: useRequestCenter('Blog/GetBy', 'GET'),
    getBlogBySeoUrl: useRequestCenter('Blog/GetBySeoURL', 'GET'),
    getAllBlogsForWeb: useRequestCenter('Blog/GetAllForWeb', 'GET'),
    // OurTeam
    getAllForUIOurTeam: useRequestCenter('OurTeam/GetAllForUI', 'GET'),
    // CounselingRequests
    counselingRequestsCreate: useRequestCenter('CounselingRequests/Create', 'POST'),
    generateRecaptcha: useRequestCenter('Recapcha/GenerateRecapcha', 'POST'),
    verifyRecaptcha: useRequestCenter('Recapcha/VerifyCapcha', 'POST'),
}
