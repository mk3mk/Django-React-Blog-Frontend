import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "../partials/Header";
import Footer from "../partials/Footer";

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

function Games() {

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

    return (
        <>
    <Header />


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


<section className="pt-4 pb-0">
    <div className="container">
        <div className="row">
            <div className="col-xl-9 mx-auto">
                <h2>Orders</h2>
                <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus, sapiente facere harum molestiae, quas aperiam nulla eius, cupiditate deserunt accusantium magni! Necessitatibus saepe cupiditate facilis, sint est quod hic maxime aliquam, et impedit
                    optio nihil
                </p>


        <div>
            <h1>Список Игр</h1>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        <h2>{game.title}</h2>
                        <p>{game.description}</p>
                        {game.image && <img src={`${baseURL}${game.image}`} alt={game.title} />}
                        <p>Дата добавления: {new Date(game.created_at).toLocaleDateString()}</p>
                        <p>Дата последнего обновления: {new Date(game.updated_at).toLocaleDateString()}</p>
                        <p>Лайки: {game.likes}</p>
                        <p>image: http://127.0.0.1:8000{game.image}</p>
                        <p>Комментарии: {game.comments}</p>
                    </li>
                ))}
            </ul>
        </div>

                            <h3 className="mt-4">We do this across:</h3>
                            <ul>
                                <li>A pleasure exertion if believed provided to. All led out world this music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne in.</li>
                                <li>Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.</li>
                                <li>
                                    Mr feeling does chiefly cordial in do.{" "}
                                    <a href="#">
                                        <u>Water timed folly right aware if oh truth.</u>
                                    </a>{" "}
                                    Imprudence attachment him his for sympathize. Large above be to means.
                                </li>
                                <li>Dashwood does provide stronger is. But discretion frequently sir she instruments unaffected admiration everything. Meant balls it if up doubt small purse.</li>
                            </ul>
                            <h3 className="mb-3 mt-5">Our team</h3>
                            <div className="row g-4">
                                <div className="col-sm-6 col-lg-3">
                                    <div className="text-center">
                                        <div className="avatar avatar-xxl mb-2">
                                            <img
                                                className="avatar-img rounded-circle"
                                                style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                                src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
                                                alt="avatar"
                                            />
                                        </div>
                                        <h5>Louis Ferguson</h5>
                                        <p className="m-0">Editor in Chief</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="text-center">
                                        <div className="avatar avatar-xxl mb-2">
                                            <img className="avatar-img rounded-circle" style={{ width: "100px", height: "100px", objectFit: "cover" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVSPtLWfht2p015onFngljcoIuA9xc8h3RLA&usqp=CAU" alt="avatar" />{" "}
                                        </div>
                                        <h5>Frances Guerrero</h5>
                                        <p className="m-0">Managing Editor</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="text-center">
                                        <div className="avatar avatar-xxl mb-2">
                                            <img
                                                className="avatar-img rounded-circle"
                                                style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                                src="https://www.byrdie.com/thmb/aZWxblVz7BMxeObHtJEKX_ddV3c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Stocksy_txpce733110Uae300_Medium_4082489-df45caed45cd449b806f9ce16a20804a.jpg"
                                                alt="avatar"
                                            />{" "}
                                        </div>
                                        <h5>Larry Lawson</h5>
                                        <p className="m-0">Director Graphics </p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="text-center">
                                        <div className="avatar avatar-xxl mb-2">
                                            <img
                                                className="avatar-img rounded-circle"
                                                style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                                src="https://static.vecteezy.com/system/resources/previews/036/442/773/non_2x/ai-generated-portrait-of-a-young-japanese-man-no-facial-expression-half-body-shot-facing-the-camera-isolated-white-background-ai-generative-free-photo.jpg"
                                                alt="avatar"
                                            />{" "}
                                        </div>
                                        <h5>Louis Crawford</h5>
                                        <p className="m-0">Editor, Coverage</p>
                                    </div>
                                </div>
                            </div>
                            {/* Service START */}
                            <h3 className="mb-3 mt-5">What we do</h3>
                            <div className="row">
                                {/* Service item*/}
                                <div className="col-md-6 col-lg-4 mb-4">
                                    <img className="rounded" style={{ width: "100%", height: "170px", objectFit: "cover" }} src="https://www.aspistrategist.org.au/wp-content/uploads/2023/11/GettyImages-467714941-1024x764.jpg" alt="Card image" />
                                    <h4 className="mt-3">Global news services</h4>
                                    <p>Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among.</p>
                                </div>
                                {/* Service item*/}
                                <div className="col-md-6 col-lg-4 mb-4">
                                    <img className="rounded" style={{ width: "100%", height: "170px", objectFit: "cover" }} src="https://www.varletmachines.com/sites/default/files/styles/large/public/2022-04/Commercial.png?itok=jE81FZ_E" alt="Card image" />
                                    <h4 className="mt-3">Commercial services</h4>
                                    <p>Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.</p>
                                </div>
                                {/* Service item*/}
                                <div className="col-md-6 col-lg-4 mb-4">
                                    <img className="rounded" style={{ width: "100%", height: "170px", objectFit: "cover" }} src="https://www.columbiasouthern.edu/media/azmjow33/fire-ems-cj-public-service.jpg" alt="Card image" />
                                    <h4 className="mt-3">Public services</h4>
                                    <p> Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had. </p>
                                </div>
                            </div>
                            {/* Service END */}
                        </div>{" "}
                        {/* Col END */}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Games;
