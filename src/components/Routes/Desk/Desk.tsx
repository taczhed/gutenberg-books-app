import { Center, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchBook } from "../../../queries";

const Desk = () => {
  const params = useParams();
  const { data, status } = useQuery(["bookDesk", params.bookid], fetchBook);
  const [bookUrl, setBookUrl] = useState();

  useEffect(() => {
    if (data?.resources) {
      const newBookUrl = data.resources.filter((resource) =>
        resource.uri.includes("h.htm"),
      );
      setBookUrl(newBookUrl[0].uri);
    }
  }, [data]);

  return (
    <Center w="full" h="100vh">
      {status === "loading" ? (
        <Center>
          Loading book ...
          <Spinner ml={4} size="md" />
        </Center>
      ) : (
        <iframe
          style={{ width: "100%", height: "100vh" }}
          title={data?.title}
          src={bookUrl}
        ></iframe>
      )}
    </Center>
  );
};

export default Desk;
