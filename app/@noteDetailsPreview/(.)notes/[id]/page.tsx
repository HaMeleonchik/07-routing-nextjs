import { fetchNoteById } from "@/lib/api"
import NotePreview from "../../../../components/NotePreview/NotePreview";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

interface Props {
    params:Promise<{id:string}>
}

export default async function previewPage({ params }: Props) {
    const { id } = await params;


    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  })
  
    return  <HydrationBoundary state={dehydrate(queryClient)}>
      <NotePreview/>
    </HydrationBoundary>
}