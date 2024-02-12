import { IconButton, Select, SimpleGrid, useColorMode } from "@chakra-ui/react";
import { SortTypes } from "../../Utility/types/sort-types";
import { useEffect, useState } from "react";

import {
  FaSortAlphaUp,
  FaSortAlphaDown,
  FaSortAmountDown,
  FaSortAmountUp,
} from "react-icons/fa";
import sortStyles from "../../Utility/styles/sort.styles";

interface Props {
  onFilter: (filter: { sort: string; order: string }) => void;
}

function SortFilter({ onFilter }: Props) {
  const { colorMode } = useColorMode();

  const [sort, setSort] = useState({
    sort: "relevance",
    order: "d",
  });

  const sortIcon =
    sort.sort == "name" ? (
      sort.order == "a" ? (
        <FaSortAlphaUp />
      ) : (
        <FaSortAlphaDown />
      )
    ) : sort.order == "a" ? (
      <FaSortAmountUp />
    ) : (
      <FaSortAmountDown />
    );

  useEffect(() => {
    onFilter(sort);
  }, [sort]);

  return (
    <SimpleGrid gridTemplateColumns={"4fr 1fr"}>
      <Select
        variant={"filled"}
        {...sortStyles.all(colorMode)}
        onChange={(e) => {
          setSort({ ...sort, sort: e.target.value });
        }}
      >
        {SortTypes.map((type) => (
          <option key={type} value={type.toLowerCase()}>
            {type}
          </option>
        ))}
      </Select>
      <IconButton
        aria-label="Sort Games"
        icon={sortIcon}
        {...sortStyles.all(colorMode)}
        onClick={() => {
          setSort({ ...sort, order: sort.order == "a" ? "d" : "a" });
        }}
      />
    </SimpleGrid>
  );
}

export default SortFilter;
