import React, { useCallback, useEffect } from "react";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import Footer from "parts/Footer";
import PageDetailDescription from "parts/PageDetailDescription";
import Activities from "parts/Activities";
import Testimony from "parts/Testimony";
import BookingForm from "parts/BookingForm_";
import { fetchPage } from "store/actions/page";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function DetailsPage() {
  const page = useSelector((state) => state.page);
  const { id } = useParams();
  const dispatch = useDispatch();
  const breadcrumb = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  const fnLoadPage = useCallback(
    async (id) => {
      if (!page[id]) {
        const response = await dispatch(fetchPage(`/detail-page/${id}`, id));
        document.title = `Staycation | ${response.title}`;
      }
    },
    [dispatch]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    fnLoadPage(id);
  }, [id]);

  if (!page[id]) return null;

  return (
    <>
      <Header />
      <PageDetailTitle breadcrumb={breadcrumb} />
      <FeaturedImage />

      <section className="container">
        <div className="row">
          <div className="col-7 pr-5">
            <PageDetailDescription data={page[id]} />
          </div>
          <div className="col-5">
            <BookingForm />
          </div>
        </div>
      </section>

      <Activities data={page[id].activityId} />
      <Testimony data={page[id].testimonial} />

      <Footer />
    </>
  );
}

export default DetailsPage;
