create table public.orders (id uuid primary key, user_id uuid references auth.users, total int);
alter table public.orders enable row level security;
create policy "own orders" on public.orders for select to authenticated using ((select auth.uid()) = user_id);
