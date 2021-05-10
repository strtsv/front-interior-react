import React from "react";

import i1 from "../../assets/images/single-post-author-1-48x48.jpg";
import i2 from "../../assets/images/single-post-1-880x472.jpg";
import i3 from "../../assets/images/single-post-2-880x472.jpg";
import i4 from "../../assets/images/single-post-comment-1-70x70.jpg";
import i5 from "../../assets/images/single-post-comment-2-70x70.jpg";
import i6 from "../../assets/images/single-post-comment-3-70x70.jpg";

class Discover extends React.Component {
  render() {
    return (
      <section className="section section-inset-7 bg-default">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-8">
              <div className="post-single-wrap">
                <div className="post-item">
                  <h3>Discover Design In This Luxury Parisian Interior</h3>
                  <ul className="list-dotted">
                    <li>
                      <div className="post-author">
                        <div className="media-wrap">
                          <img src={i1} alt width={48} height={48} />
                        </div>
                        <div className="author-name">Martha Ryan</div>
                      </div>
                    </li>
                    <li>
                      <div className="post-time">June 16, 2020 at 2:12 pm</div>
                    </li>
                    <li>
                      <div className="post-tag">News</div>
                    </li>
                  </ul>
                  <div className="subtitle heading-6">
                    Lorem ipsum dolor sit amet, qui tollit laoreet ocurreret id,
                    ne vis melius offendit appetere, ius timeam percipit
                    argumentum id. His mutat nostrum ad, ei qui nostro aeterno
                    recteque, aperiam quaerendum id has. et.
                  </div>
                  <img
                    className="img-bordered"
                    src={i2}
                    alt
                    width={880}
                    height={472}
                  />
                  <p>
                    Nulla viverra blandit lacinia. Nullam nisi est, egestas id
                    leo vulputate, egestas imperdiet sem. Suspendisse potenti.
                    Maecenas turpis sapien, consectetur et tellus et, porttitor
                    rhoncus nisi. Aliquam non mauris a diam molestie facilisis.
                    Suspendisse efficitur, sem at ornare malesuada, nisl nisl
                    pretium nisi, nec ullamcorper ipsum turpis eget est.
                    Phasellus dapibus ut neque vel ultrices.
                  </p>
                  <blockquote className="quote quote-default">
                    <div className="quote-icon mdi mdi-format-quote" />
                    <div className="quote-body">
                      <q className="heading-6">
                        Phasellus dignissim mauris sit amet magna dignissim
                        ornare. Duis ornare lectus non vulputate pulvinar.
                        Pellentesque rhoncus, diam id pulvinar consectetur,
                        turpis sem consectetur enim, quis vulputate magna augue
                        sit.
                      </q>
                    </div>
                  </blockquote>
                  <p>
                    At eos omnium option disputando, eius nusquam quo at. Ad sit
                    modo nemore diceret, in vel vidit dicat. Eam fierent
                    neglegentur ea. Delectus volutpat at sit, cum etiam copiosae
                    an. Vim in illud nonumy malorum. Nemore democritum cu eos,
                    quo etiam volumus id. Eripuit corrumpit ei quo.
                  </p>
                  <p>
                    In summo assentior consetetur qui, ea per dolor erroribus
                    expetendis. Causae audire cu est. Quodsi meliore mei ea, at
                    odio euismod pro. Ad mundi indoctum sit. Vel meis
                    instructior in, discere habemus eu usu. Ne eam quas saperet,
                    cu vix homero recteque, no mea eripuit sadipscing.
                  </p>
                  <img
                    className="img-bordered"
                    src={i3}
                    alt
                    width={880}
                    height={472}
                  />
                  <p>
                    Lorem ipsum dolor sit amet, qui tollit laoreet ocurreret id,
                    ne vis melius offendit appetere, ius timeam percipit
                    argumentum id. His mutat nostrum ad, ei qui nostro aeterno
                    recteque, aperiam quaerendum id has. Quod tantas volumus eu
                    eum, mei appetere honestatis an. Dico apeirian qui ad, pri
                    eu munere menandri maluisset. Ei has elit essent mentitum,
                    sed ex vocent maluisset.
                  </p>
                  <div className="group-sm buttons-group-1">
                    <a
                      className="button button-md-2 button-icon button-icon-left button-round button-facebook"
                      href="#"
                    >
                      <span className="icon mdi mdi-facebook" />
                      <span>Share on Facebook</span>
                    </a>
                    <a
                      className="button button-md-2 button-icon button-icon-left button-round button-twitter"
                      href="#"
                    >
                      <span className="icon mdi mdi-twitter" />
                      <span>Share on Twitter</span>
                    </a>
                  </div>
                </div>
                <div className="post-item">
                  <h2>Comments</h2>
                  <ul className="comment-list">
                    <li>
                      <div className="box-comment">
                        <div className="box-comment-image">
                          <img src={i4} alt width={70} height={70} />
                        </div>
                        <div className="box-comment-body">
                          <div className="title">Harold Brown</div>
                          <div className="date">June 16, 2020 at 2:48 pm</div>
                          <div className="comment">
                            Curabitur eu dictum erat. Suspendisse non tortor
                            magna. Fusce nec suscipit sem. Aliquam in nisi at
                            orci lacinia pharetra. Vestibulum id convallis
                            magna. In hac habitasse platea dictumst. Nam iaculis
                            eget augue nec tempus.
                          </div>
                          <a className="comment-link" href="#">
                            Reply
                          </a>
                        </div>
                      </div>
                      <ul className="comment-list-reply">
                        <li>
                          <div className="box-comment">
                            <div className="box-comment-image">
                              <img src={i5} alt width={70} height={70} />
                            </div>
                            <div className="box-comment-body">
                              <div className="title">Martha Ryan</div>
                              <div className="date">
                                June 16, 2020 at 2:48 pm
                              </div>
                              <div className="comment">
                                Vivamus massa mi, mattis ut vestibulum sit amet,
                                dignissim eget sem. Nunc porttitor sem et velit
                                pretium ullamcorper. Lorem ipsum dolor sit amet.
                                Nunc vulputate augue porta augue bibendum, quis
                                porttitor velit aliquet.
                              </div>
                              <a className="comment-link" href="#">
                                Reply
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="box-comment">
                        <div className="box-comment-image">
                          <img src={i6} alt width={70} height={70} />
                        </div>
                        <div className="box-comment-body">
                          <div className="title">Melissa Wagner</div>
                          <div className="date">June 16, 2020 at 2:48 pm</div>
                          <div className="comment">
                            Donec non tempus ipsum. Nam cursus arcu quis enim
                            porttitor, eget vulputate enim vulputate. Maecenas
                            hendrerit accumsan quam, quis condimentum augue
                            consectetur eget. Donec nunc metus, tempor nec
                            malesuada convallis, semper quis eros.
                          </div>
                          <a className="comment-link" href="#">
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="post-item">
                  <h2>Leave a Comment</h2>
                  <form className="rd-form rd-mailform comment-form">
                    <div className="row row-15">
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <input
                            className="form-input"
                            id="contact-name"
                            type="text"
                            name="name"
                            data-constraints="@Required"
                          />
                          <label className="form-label" htmlFor="contact-name">
                            Name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <input
                            className="form-input"
                            id="contact-email"
                            type="email"
                            name="email"
                            data-constraints="@Email @Required"
                          />
                          <label className="form-label" htmlFor="contact-email">
                            E-mail
                          </label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-wrap">
                          <label
                            className="form-label"
                            htmlFor="contact-message"
                          >
                            Message
                          </label>
                          <textarea
                            className="form-input"
                            id="contact-message"
                            name="message"
                            data-constraints="@Required"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <button className="button button-primary" type="submit">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Discover;
