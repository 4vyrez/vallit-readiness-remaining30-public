-- Written by Vallit: these views now read with the rights of whoever asks,
-- so the row-level security of the tables they read applies through them.
alter view public.order_totals set (security_invoker = true);
