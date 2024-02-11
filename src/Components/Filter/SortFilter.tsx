import { IconButton, Select, SimpleGrid } from "@chakra-ui/react";
import { SortTypes } from "../../Utility/types/sort-types";
import { useEffect, useState } from "react";

import {
  FaSortAlphaUp,
  FaSortAlphaDown,
  FaSortAmountDown,
  FaSortAmountUp,
} from "react-icons/fa";

interface Props {
  onFilter: (filter: { sort: string; order: string }) => void;
}

function SortFilter({ onFilter }: Props) {
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
    console.log(sort);
    onFilter(sort);
  }, [sort]);

  return (
    <SimpleGrid gridTemplateColumns={"4fr 1fr"}>
      <Select
        placeholder="Sort By"
        variant={"filled"}
        onChange={(e) => {
          setSort({ ...sort, sort: e.target.value });
        }}
      >
        {SortTypes.map((type) => (
          <option key={type} value={type.toLowerCase()}>
            {type}
            {type == "Relevance" && " (Default)"}
          </option>
        ))}
      </Select>
      <IconButton
        aria-label="Sort Games"
        icon={sortIcon}
        onClick={() => {
          setSort({ ...sort, order: sort.order == "a" ? "d" : "a" });
        }}
      />
      {/* <Select
        placeholder="Order"
        variant={"filled"}
        onChange={(e) => {
          setSort({ ...sort, order: e.target.value });
        }}
      >
        <option value="a"><Icon></Icon></option>
        <option value="d">Descendent</option>
      </Select> */}
    </SimpleGrid>
  );
}

export default SortFilter;
