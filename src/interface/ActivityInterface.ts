interface Presenter {
    id: string;
    name: string;
    email: string;
    gender: string;
    avatar: string;
  }
  
  export interface IActivity {
    access_mode: string;
    amount: number;
    attendance_mode: string;
    banner: string;
    cpd: number;
    created_at: string;
    description: string;
    end_date: string;
    event_type: string;
    id: string;
    is_active: boolean;
    is_cert_available: boolean;
    is_featured: boolean;
    is_online: boolean;
    is_verified: boolean;
    language: string;
    organization_id: string;
    presenters: Presenter[];
    remaining_seats: number;
    scheduled: boolean;
    start_date: string;
    streaming_link: string;
    title: string;
    total_seats: number;
    updated_at: string;
  }

  export interface IOrganization {
    id: string;
    name: string;
    country: string;
    featured: boolean;
    organization_code: string;
    banner_image: string;
    category: string;
    created_at: string;
    is_active: boolean;
    logo: string;
    total_staffs: number;
    updated_at: string;
  }