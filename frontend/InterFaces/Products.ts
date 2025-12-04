export interface Product {
    _id: string;
    name: string;
    description: string;    
    price: number;
    category: string;
    image: string;
    featured: boolean;
    inStock: boolean;
    tags: string[];
    specifications: {
    weight: string;
    dimensions: string;
    };
    createdAt: string;
    updatedAt: string;
}


export interface ProductsState {
    products?: Product[];
    loading: boolean;
    error: string | null;
    product?:Product | null
}

export interface BlogsState{
    loading: boolean;
    error: string | null;
    blogs: BlogPost[]
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;       
  image?: string;          
  featured: boolean;
  published: boolean;
  category?: string;
  author?: string;
  tags: string[];          
  views: number;
  createdAt: string;       
  updatedAt: string;
  __v?: number;
}

