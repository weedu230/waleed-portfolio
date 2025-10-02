-- Fix security issue: Remove anonymous access to conversations
-- Drop existing policies
DROP POLICY IF EXISTS "Users can view their own conversations" ON public.conversations;
DROP POLICY IF EXISTS "Users can create conversations" ON public.conversations;
DROP POLICY IF EXISTS "Users can update their own conversations" ON public.conversations;

DROP POLICY IF EXISTS "Users can view messages from their conversations" ON public.messages;
DROP POLICY IF EXISTS "Users can create messages in their conversations" ON public.messages;

DROP POLICY IF EXISTS "Users can view requirements from their conversations" ON public.requirements;
DROP POLICY IF EXISTS "Users can create requirements in their conversations" ON public.requirements;

-- Create new secure policies for conversations (authentication required)
CREATE POLICY "Authenticated users can view their own conversations"
ON public.conversations
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Authenticated users can create their own conversations"
ON public.conversations
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Authenticated users can update their own conversations"
ON public.conversations
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

-- Create new secure policies for messages (authentication required)
CREATE POLICY "Authenticated users can view messages from their conversations"
ON public.messages
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1
    FROM conversations
    WHERE conversations.id = messages.conversation_id
    AND conversations.user_id = auth.uid()
  )
);

CREATE POLICY "Authenticated users can create messages in their conversations"
ON public.messages
FOR INSERT
TO authenticated
WITH CHECK (
  EXISTS (
    SELECT 1
    FROM conversations
    WHERE conversations.id = messages.conversation_id
    AND conversations.user_id = auth.uid()
  )
);

-- Create new secure policies for requirements (authentication required)
CREATE POLICY "Authenticated users can view requirements from their conversations"
ON public.requirements
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1
    FROM conversations
    WHERE conversations.id = requirements.conversation_id
    AND conversations.user_id = auth.uid()
  )
);

CREATE POLICY "Authenticated users can create requirements in their conversations"
ON public.requirements
FOR INSERT
TO authenticated
WITH CHECK (
  EXISTS (
    SELECT 1
    FROM conversations
    WHERE conversations.id = requirements.conversation_id
    AND conversations.user_id = auth.uid()
  )
);