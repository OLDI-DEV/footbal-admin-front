import { useState } from "react";
import NextTrainingTable from "../components/nextTrainingTable/NextTrainingTable";
import SearchField from "../components/reusedComponents/SearchField";
import { players } from "../demoDataPlayers";
import { useMemo } from "react";
const NextTrainingPage = () => {
  const [search, setSearch] = useState({ query: "" });
  const searchedPlayer = useMemo(() => {
    return players.filter((player) =>
      player.name.toLowerCase().includes(search.query)
    );
  }, [search.query]);
  return (
    <>
      <SearchField search={search} setSearch={setSearch} />
      <NextTrainingTable playerStatsProps={searchedPlayer} />
    </>
  );
};

export default NextTrainingPage;
