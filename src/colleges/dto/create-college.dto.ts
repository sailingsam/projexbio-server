export interface CreateCollegeDto {
  // Basic information that comes in request body
  name: string;
  description?: string;
  location?: string;
  website?: string;
  emailDomains: string[]; // format: @domain.com
}
