-- Add SELECT policy to protect contact messages from unauthorized access
-- Only authenticated users can read contact messages (for admin access)
CREATE POLICY "Only authenticated users can view contact messages" 
ON public.contact_messages 
FOR SELECT 
TO authenticated 
USING (true);

-- Alternative: More restrictive policy for future admin role implementation
-- Uncomment this and remove the above policy when you implement user roles
-- CREATE POLICY "Only admins can view contact messages" 
-- ON public.contact_messages 
-- FOR SELECT 
-- TO authenticated 
-- USING (
--   EXISTS (
--     SELECT 1 FROM public.user_roles 
--     WHERE user_id = auth.uid() AND role = 'admin'
--   )
-- );