export enum AgentRole {
  Admin = "Admin",
  Agent = "Agent",
}

export type Agent = {
  id: string;
  supertokens_user_id: string;
  created_at: string;
  updated_at: string;
  fullname: string;
  email: string;
  phone_number: string;
  profile_picture_url: null | string;
  role: AgentRole;
};
