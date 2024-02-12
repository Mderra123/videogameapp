import { Select, useColorMode } from "@chakra-ui/react";
import { Platform } from "../../Utility/types/sort-types";
import sortStyles from "../../Utility/styles/sort.styles";

interface Props {
  onFilter: (platform: string) => void;
  platforms: Platform[];
}

function PlatformFilter({ onFilter, platforms }: Props) {
  const { colorMode } = useColorMode();
  return (
    <Select
      variant={"filled"}
      {...sortStyles.all(colorMode)}
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
