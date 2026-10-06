-- Written by Vallit: these functions skip row-level security and nothing in the
-- app calls them through the API, so the browser keys may no longer call them.
-- The server (service role) and the database itself still can.
revoke execute on function public.close_order(order_id uuid, note text) from public, anon, authenticated;
