import { Select } from "@chakra-ui/react";
import { Platforms } from "../../types";

interface Props {
  onFilter: (filter: string) => void;
}

function PlatformFilter({ onFilter }: Props) {
  return (
    <Select
      variant={"filled"}
      onChange={(e) => {
        onFilter(e.target.value);
      }}
    >
      <option value="all">All</option>
      {Platforms.map((plat) => (
        <option key={plat} value={plat.toLowerCase()}>
          {plat}
        </option>
      ))}
    </Select>
  );
}

export default PlatformFilter;
