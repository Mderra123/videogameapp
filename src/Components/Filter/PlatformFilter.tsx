import { Select } from "@chakra-ui/react";
import { Platform } from "../../Utility/types/sort-types";

interface Props {
  onFilter: (platform: string) => void;
  platforms: Platform[];
}

function PlatformFilter({ onFilter, platforms }: Props) {
  return (
    <Select
      variant={"filled"}
      onChange={(e) => {
        onFilter(e.target.value);
      }}
    >
      <option value="all">All</option>
      {platforms.map((plat) => (
        <option key={plat.id} value={plat.name}>
          {plat.name}
        </option>
      ))}
    </Select>
  );
}

export default PlatformFilter;
