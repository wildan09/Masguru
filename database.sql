-- Projects Table
create table projects (
  id bigint generated always as identity primary key,
  title text not null,
  description text,
  tags text[] default '{}',
  demo_url text,
  github_url text,
  category text default 'web',
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Tips Table
create table tips (
  id bigint generated always as identity primary key,
  title text not null,
  description text,
  category text default 'programming',
  url text,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Submissions Table
create table submissions (
  id bigint generated always as identity primary key,
  academic_year text not null,
  class_name text not null,
  student_name text not null,
  google_drive_link text not null,
  notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Note: We are keeping Row Level Security (RLS) disabled for this simple portfolio setup
-- so that it works seamlessly without complex policies.
-- If you wish to secure your tables further, you can enable RLS and add policies via the Supabase dashboard.
