-- Create OTP table following the same schema pattern
create table if not exists public.free_tool_otp_codes (
  id uuid not null default gen_random_uuid(),
  user_id uuid not null,
  email character varying(255) not null,
  otp_code character varying(6) not null,
  is_used boolean null default false,
  expires_at timestamp without time zone not null,
  created_at timestamp without time zone null default now(),
  used_at timestamp without time zone null,
  constraint free_tool_otp_codes_pkey primary key (id),
  constraint free_tool_otp_codes_user_id_fkey foreign key (user_id) references free_tool_users (id) on delete cascade
) tablespace pg_default;

create index if not exists idx_otp_user_id on public.free_tool_otp_codes using btree (user_id) tablespace pg_default;
create index if not exists idx_otp_email on public.free_tool_otp_codes using btree (email) tablespace pg_default;
create index if not exists idx_otp_expires_at on public.free_tool_otp_codes using btree (expires_at) tablespace pg_default;
create index if not exists idx_otp_is_used on public.free_tool_otp_codes using btree (is_used) tablespace pg_default;
