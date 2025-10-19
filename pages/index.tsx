import { useQuery } from "@apollo/client";
import { GET_PAGINATED_CHARACTERS } from "@/graphql/queries";

export default function Home() {
  const { data, loading, error } = useQuery(GET_PAGINATED_CHARACTERS);

  if (loading) return <p>Loading characters...</p>;
  if (error) return <p>Error fetching characters 😢</p>;

  // Combine all pages' results into one array
  const characters = [
    ...data.page1.results,
    ...data.page2.results,
    ...data.page3.results,
    ...data.page4.results,
  ];

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Rick and Morty Characters (Paginated)</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, 180px)", gap: "1rem" }}>
        {characters.map((char: any) => (
          <div key={char.id} style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "0.5rem" }}>
            <img src={char.image} alt={char.name} style={{ width: "100%", borderRadius: "10px" }} />
            <p><strong>{char.name}</strong></p>
            <p>{char.status}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
