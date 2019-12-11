import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetails } from "../../../store/Detail/action";
import { IDetail } from "../../../store/serverTypes";
import Modal from "../../UI/Modal/Modal";

interface Props {}
interface DetailProps {
  detailStore: {
    movie: IDetail;
    isLoading: boolean;
  };
}
const MovieDetail: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      const movieId = parseFloat(id);
      dispatch(fetchDetails(movieId));
    }
  }, [dispatch, id]);
  const movie = useSelector((state: DetailProps) => state.detailStore.movie);
  const isLoading = useSelector(
    (state: DetailProps) => state.detailStore.isLoading
  );
  return <Modal />;
};

export default MovieDetail;
