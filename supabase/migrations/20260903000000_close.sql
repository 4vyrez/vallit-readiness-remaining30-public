create function public.close_order(order_id uuid, note text default '')
returns void language plpgsql security definer set search_path = '' as $$
begin
 update public.orders set total = 0 where id = order_id;
end $$;
