
import { useId, useState } from "react";
import { SMART_PEOPLE } from "../data/smartPeople";

export default function ScientistDirectory({
  initialData = SMART_PEOPLE,
}) {
  const id = useId();

  const [people, setPeople] = useState(initialData);
  const [query, setQuery] = useState("");
  const [minIq, setMinIq] = useState(0);
  const [sortBy, setSortBy] = useState("iq-desc");

  const visiblePeople = people
    .filter((person) =>
      person.name
        .toLowerCase()
        .includes(query.trim().toLowerCase())
        && person.iq >= minIq
    )
    .toSorted((a, b) => {
      if (sortBy === "iq-desc") {
        return b.iq - a.iq;
      }

      if (sortBy === "iq-asc") {
        return a.iq - b.iq;
      }

      if (sortBy === "age-asc") {
        return a.age - b.age;
      }

      return b.age - a.age;
    });

  function handleDelete(personId) {
    setPeople((currentPeople) =>
      currentPeople.filter((person) => person.id !== personId)
    );
  }

  function handleReset() {
    setPeople([...initialData]);
    setQuery("");
    setMinIq(0);
    setSortBy("iq-desc");
  }

  return (
    <section aria-label="Scientist Directory">
      <h2>Scientist Directory</h2>

      <form role="search" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor={`${id}-search`}>Name</label>
        <input
          id={`${id}-search`}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

        <label htmlFor={`${id}-min-iq`}>Min IQ</label>
        <input
          id={`${id}-min-iq`}
          type="number"
          min="0"
          value={minIq}
          onChange={(event) =>
            setMinIq(
              event.target.value === ""
                ? 0
                : event.target.valueAsNumber
            )
          }
        />

        <label htmlFor={`${id}-sort`}>Sort By</label>
        <select
          id={`${id}-sort`}
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="iq-desc">IQ: High to Low</option>
          <option value="iq-asc">IQ: Low to High</option>
          <option value="age-asc">Age: Youngest First</option>
          <option value="age-desc">Age: Oldest First</option>
        </select>
      </form>

      <button type="button" onClick={handleReset}>
        Reset
      </button>

      <output role="status" aria-live="polite">
        Found {visiblePeople.length} pioneers
      </output>

      <ul>
        {visiblePeople.map((person) => (
          <li key={person.id}>
            <strong>{person.name}</strong>
            {" — "}
            Age: {person.age}
            {" — "}
            IQ: {person.iq}
            {" "}
            <button
              type="button"
              aria-label={`Delete ${person.name}`}
              onClick={() => handleDelete(person.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
