interface User {
  name: string;
  tmc: string;
}

interface AppreciationResponse {
  user_id: number;
  comment: string;
  ap_users: User[];
}

interface AppreciationLikePost {
  user_id: number;
  appreciation_records_id: number;
  ap_users: User[];
}

interface AppreciationRecord {
  sender_tmc: string;
  receiver_tmc: string;
  sender_name: string;
  receiver_name: string;
  category: string;
  message: string;
  created_at: string;
  likes_count: number;
  id: number;
  ap_responses: AppreciationResponse[];
  ap_like_posts: AppreciationLikePost[];
}

export interface AppreciationListResponse {
  success: boolean;
  data: {
    count: number;
    rows: AppreciationRecord[];
  };
  message: string;
}
