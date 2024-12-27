import { useState, useEffect } from "react";
import axios from 'axios';
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import ModalVerticallyCenteredExample from "../partials/ModalVerticallyCenteredExample";
import ChartLineExample from "../partials/ChartLineExample";
import ChartBarExample from "../partials/ChartBarExample";
import ChartPolarAreaExample from "../partials/ChartPolarAreaExample";
import TableExample from "../partials/TableExample";
import { Link } from "react-router-dom";
import moment from "moment";

import apiInstance from "../../utils/axios";
import useUserData from "../../plugin/useUserData";
import Toast from "../../plugin/Toast";

import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';

import {
    CCard,
    CCardBody,
    CCardFooter,
    CCardImage,
    CCardText,
    CCardTitle,
    CCardLink,
    CListGroup,
    CListGroupItem,
    CButton,
    CCol,
    CRow,
    CContainer
  } from '@coreui/react'


function Index() {

    const [games, setGames] = useState([]);
    const baseURL = 'http://127.0.0.1:8000';
  
    useEffect(() => {
        // Получение данных с API
        const fetchGames = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/games/');
                setGames(response.data);
            } catch (error) {
                console.error('Ошибка при загрузке игр:', error);
            }
        };
  
        fetchGames();
    }, []);


    const [posts, setPosts] = useState([]);
    const [popularPosts, setPopularPosts] = useState([]);
    const [category, setCategory] = useState([]);

    const fetchPosts = async () => {
        const response = await apiInstance.get(`post/lists/`);
        setPosts(response.data);
    };

    const fetchPopularPost = () => {
        const sortedPopularPost = posts?.sort((a, b) => b.view - a.view);
        setPopularPosts(sortedPopularPost);
    };

    const fetchCategory = async () => {
        const response = await apiInstance.get(`post/category/list/`);
        setCategory(response.data);
    };

    useEffect(() => {
        fetchPosts();
        fetchCategory();
    }, []);

    useEffect(() => {
        fetchPopularPost();
    }, [posts]);

    // Pagination
    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const postItems = posts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(posts.length / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    const handleLikePost = async (postId) => {
        const jsonData = {
            user_id: useUserData()?.user_id,
            post_id: postId,
        };
        const response = await apiInstance.post(`post/like-post/`, jsonData);
        console.log(response.data);
        fetchPosts();

        Toast("success", response.data.message, "");
    };

    const handleBookmarkPost = async (postId) => {
        const jsonData = {
            user_id: useUserData()?.user_id,
            post_id: postId,
        };
        const response = await apiInstance.post(`post/bookmark-post/`, jsonData);
        console.log(response.data);
        fetchPosts();

        Toast("success", response.data.message, "");
    };

    return (
        <div>
            <Header />


<CContainer>
    <CRow>
        <CCol><h2>Games</h2></CCol>
    </CRow>
</CContainer>


  <CContainer>
    <CRow xs={{ cols: 1 }} md={{ cols: 4 }} className="g-4">
      {games.map((game) => (
        <CCol xs>
        <CCard key={game.id} className="h-100">
        <CCardImage orientation="top" height="200px" src={`${baseURL}${game.image}`} />
          <CCardBody>
            <CCardTitle>{game.title}</CCardTitle>
            <CCardText>
            <p>{game.description}</p>
            </CCardText>
          </CCardBody>
          <CListGroup flush>
            <CListGroupItem>
            <i className="fas fa-calendar text-black-50"></i> <span className="me-3 text-black-50">05-02-2024</span>    
            <i className="fas fa-heart text-black-50" /> <span className="me-3 text-black-50">{game.likes}</span>
            <i className="fas fa-comments text-black-50"></i> <span className="text-black-50">{game.comments}</span>
            </CListGroupItem>
          </CListGroup>
          <CButton color="primary" href="#">
            Continue...
          </CButton>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
        </CCol>
      ))}
    </CRow>
  </CContainer>



            


<section className="bg-light pt-5 pb-5 mb-3 mt-3">
<CContainer>
    <CRow>
        <CCol><h2>Home</h2></CCol>
    </CRow>
</CContainer>

<CContainer>
<CRow xs={{ cols: 1 }} sm={{ cols: 2 }} md={{ cols: 3 }} lg={{ cols: 4 }} xl={{ cols: 4 }} className="g-4">
      
      
      <CCol xs>
        <CCard className="h-100">
          <CCardImage orientation="top" className="h-50" src="games/cards-01.png" />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CCardText>
          </CCardBody>
          <CListGroup flush>
            <CListGroupItem>
            <i className="fas fa-calendar text-black-50"></i> <span className="me-3 text-black-50">05-02-2024</span>    
            <i className="fas fa-heart text-black-50" /> <span className="me-3 text-black-50">85</span>
            <i className="fas fa-comments text-black-50"></i> <span className="text-black-50">20</span>
            </CListGroupItem>
          </CListGroup>
          <CButton color="primary" href="#">
            Continue...
          </CButton>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>


      <CCol xs>
        <CCard className="h-100">
        <CCardImage orientation="top" className="h-50" src="games/cubes-01.png" />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This card has supporting text below as a natural lead-in to additional content.
            </CCardText>
          </CCardBody>
          <CListGroup flush>
            <CListGroupItem>
            <i className="fas fa-calendar text-black-50"></i> <span className="me-3 text-black-50">05-02-2024</span>    
            <i className="fas fa-heart text-black-50" /> <span className="me-3 text-black-50">85</span>
            <i className="fas fa-comments text-black-50"></i> <span className="text-black-50">20</span>
            </CListGroupItem>
          </CListGroup>
          <CButton color="primary" href="#">
            Continue...
          </CButton>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>


      <CCol xs>
        <CCard className="h-100">
        <CCardImage orientation="top" className="h-50" src="games/cells-01.png" />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This card has even longer content than the first to show that equal height
              action.
            </CCardText>
          </CCardBody>
          <CListGroup flush>
            <CListGroupItem>
            <i className="fas fa-calendar text-black-50"></i> <span className="me-3 text-black-50">05-02-2024</span>    
            <i className="fas fa-heart text-black-50" /> <span className="me-3 text-black-50">85</span>
            <i className="fas fa-comments text-black-50"></i> <span className="text-black-50">20</span>
            </CListGroupItem>
          </CListGroup>
          <CButton color="primary" href="#">
            Continue...
          </CButton>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>


      <CCol xs>
        <CCard className="h-100">
          <CCardImage orientation="top" className="h-50" src="games/cards-01.png" />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CCardText>
          </CCardBody>
          <CListGroup flush>
            <CListGroupItem>
            <i className="fas fa-calendar text-black-50"></i> <span className="me-3 text-black-50">05-02-2024</span>    
            <i className="fas fa-heart text-black-50" /> <span className="me-3 text-black-50">85</span>
            <i className="fas fa-comments text-black-50"></i> <span className="text-black-50">20</span>
            </CListGroupItem>
          </CListGroup>
          <CButton color="primary" href="#">
            Continue...
          </CButton>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>


      <CCol xs>
        <CCard className="h-100">
        <CCardImage orientation="top" className="h-50" src="games/cubes-01.png" />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This card has supporting text below as a natural lead-in to additional content.
            </CCardText>
          </CCardBody>
          <CListGroup flush>
            <CListGroupItem>
            <i className="fas fa-calendar text-black-50"></i> <span className="me-3 text-black-50">05-02-2024</span>    
            <i className="fas fa-heart text-black-50" /> <span className="me-3 text-black-50">85</span>
            <i className="fas fa-comments text-black-50"></i> <span className="text-black-50">20</span>
            </CListGroupItem>
          </CListGroup>
          <CButton color="primary" href="#">
            Continue...
          </CButton>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>


      <CCol xs>
        <CCard className="h-100">
        <CCardImage orientation="top" className="h-50" src="games/cells-01.png" />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This card has even longer content than the first to show that equal height
              action.
            </CCardText>
          </CCardBody>
          <CListGroup flush>
            <CListGroupItem>
            <i className="fas fa-calendar text-black-50"></i> <span className="me-3 text-black-50">05-02-2024</span>    
            <i className="fas fa-heart text-black-50" /> <span className="me-3 text-black-50">85</span>
            <i className="fas fa-comments text-black-50"></i> <span className="text-black-50">20</span>
            </CListGroupItem>
          </CListGroup>
          <CButton color="primary" href="#">
            Continue...
          </CButton>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>


    </CRow>
</CContainer>
</section>




<CContainer>
    <CRow>
        <CCol><ModalVerticallyCenteredExample /></CCol>
        <CCol><TableExample /></CCol>
        <CCol><ModalVerticallyCenteredExample /></CCol>
    </CRow>
    <CRow>
        <CCol><ChartLineExample /></CCol>
        <CCol><ChartPolarAreaExample /></CCol>
        <CCol><ChartBarExample /></CCol>
    </CRow>
</CContainer>









            <section className="p-0">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <a href="#" className="d-block card-img-flash">
                                <img src="assets/images/adv-3.png" alt="" />
                            </a>
                            <h2 className="text-start d-block mt-1">Trending Articles 🔥</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-4 pb-0">
                <div className="container">
                    <div className="row">
                        {postItems?.map((p, index) => (
                            <div className="col-sm-6 col-lg-3" key={index}>
                                <div className="card mb-4">
                                    <div className="card-fold position-relative">
                                        <img className="card-img" style={{ width: "100%", height: "160px", objectFit: "cover" }} src={p.image} alt={p.title} />
                                    </div>
                                    <div className="card-body px-3 pt-3">
                                        <h4 className="card-title">
                                            <Link to={`detail/${p.slug}`} className="btn-link text-reset stretched-link fw-bold text-decoration-none">
                                                {p.title?.slice(0, 32) + "..."}
                                            </Link>
                                        </h4>
                                        <button type="button" onClick={() => handleBookmarkPost(p.id)} style={{ border: "none", background: "none" }}>
                                            <i className="fas fa-bookmark text-danger"></i>
                                        </button>
                                        <button onClick={() => handleLikePost(p.id)} style={{ border: "none", background: "none" }}>
                                            <i className="fas fa-thumbs-up text-primary"></i>
                                        </button>{" "}
                                        {p.likes?.length}
                                        <ul className="mt-3 list-style-none" style={{ listStyle: "none" }}>
                                            <li>
                                                <a href="#" className="text-dark text-decoration-none">
                                                    <i className="fas fa-user"></i> {p.profile?.full_name}
                                                </a>
                                            </li>
                                            <li className="mt-2">
                                                <i className="fas fa-calendar"></i> {moment(p.date).format("DD MMM, YYYY")}
                                            </li>
                                            <li className="mt-2">
                                                <i className="fas fa-eye"></i> {p.view} Views
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <nav className="d-flex mt-5">
                        <ul className="pagination">
                            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                <button className="page-link me-1" onClick={() => setCurrentPage(currentPage - 1)}>
                                    <i className="ci-arrow-left me-2" />
                                    Previous
                                </button>
                            </li>
                        </ul>
                        <ul className="pagination">
                            {pageNumbers.map((number) => (
                                <li key={number} className={`page-item ${currentPage === number ? "active" : ""}`}>
                                    <button className="page-link" onClick={() => setCurrentPage(number)}>
                                        {number}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <ul className="pagination">
                            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                <button className="page-link ms-1" onClick={() => setCurrentPage(currentPage + 1)}>
                                    Next
                                    <i className="ci-arrow-right ms-3" />
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>

            <section className="bg-light pt-5 pb-5 mb-3 mt-3">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-12 ">
                            <div className="mb-4">
                                <h2>Categories</h2>
                            </div>
                            <div className="d-flex flex-wrap justify-content-between">
                                {category?.map((c, index) => (
                                    <div className="mt-2" key={index}>
                                        <Link to={`/category/${c.slug}/`}>
                                            <div className="card bg-transparent">
                                                <img className="card-img" src={c.image} style={{ width: "150px", height: "80px", objectFit: "cover" }} alt="card image" />
                                                <div className="d-flex flex-column align-items-center mt-3 pb-2">
                                                    <h5 className="mb-0">{c.title}</h5>
                                                    <small>{c.post_count} Articles</small>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-0">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <a href="#" className="d-block card-img-flash">
                                <img src="assets/images/adv-3.png" alt="" />
                            </a>
                            <h2 className="text-start d-block mt-1">Popular Articles 🕒</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-4 pb-0">
                <div className="container">
                    <div className="row">
                        {popularPosts?.map((p, index) => (
                            <div className="col-sm-6 col-lg-3" key={index}>
                                <div className="card mb-4">
                                    <div className="card-fold position-relative">
                                        <img className="card-img" style={{ width: "100%", height: "160px", objectFit: "cover" }} src={p.image} alt={p.title} />
                                    </div>
                                    <div className="card-body px-3 pt-3">
                                        <h4 className="card-title">
                                            <Link to={`detail/${p.slug}`} className="btn-link text-reset stretched-link fw-bold text-decoration-none">
                                                {p.title?.slice(0, 32) + "..."}
                                            </Link>
                                        </h4>
                                        <ul className="mt-3 list-style-none" style={{ listStyle: "none" }}>
                                            <li>
                                                <a href="#" className="text-dark text-decoration-none">
                                                    <i className="fas fa-user"></i> {p.profile?.full_name}
                                                </a>
                                            </li>
                                            <li className="mt-2">
                                                <i className="fas fa-calendar"></i> {moment(p.date).format("DD MMM, YYYY")}
                                            </li>
                                            <li className="mt-2">
                                                <i className="fas fa-eye"></i> {p.view} Views
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <nav className="d-flex mt-2">
                        <ul className="pagination">
                            <li className="">
                                <button className="page-link text-dark fw-bold me-1 rounded">
                                    <i className="fas fa-arrow-left me-2" />
                                    Previous
                                </button>
                            </li>
                        </ul>
                        <ul className="pagination">
                            <li key={1} className="active">
                                <button className="page-link text-dark fw-bold rounded">1</button>
                            </li>
                            <li key={2} className="ms-1">
                                <button className="page-link text-dark fw-bold rounded">2</button>
                            </li>
                        </ul>
                        <ul className="pagination">
                            <li className={`totalPages`}>
                                <button className="page-link text-dark fw-bold ms-1 rounded">
                                    Next
                                    <i className="fas fa-arrow-right ms-3 " />
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Index;
