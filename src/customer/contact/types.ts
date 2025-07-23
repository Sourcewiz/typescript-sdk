export interface Contact {
  id: string;
  referenceId: string;
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  designation?: string;
  status?: 'active' | 'inactive';
  isDefault?: boolean;
  attributes?: any[];
  createdAt?: string;
  updatedAt?: string;
}

export interface ContactListRequest {
  sortBy?: 'created_at' | 'updated_at';
  sort?: 'asc' | 'desc';
  status?: 'active' | 'inactive';
  page?: number;
  pageSize?: number;
}

export interface ContactCreateRequest {
  referenceId: string;
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  designation?: string;
  isDefault?: boolean;
  attributes?: any[];
}

export interface ContactUpdateRequest {
  referenceId?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  designation?: string;
  isDefault?: boolean;
  attributes?: any[];
}