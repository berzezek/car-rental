<template>
  <div>
    <main-slide />
    <section class="cars4 section-padding">
      <div class="container">
        <div class="row">
          <!-- Sidebar -->
          <div class="col-lg-4 col-md-12 mb-30">
            <div class="sidebar-list">
              <div class="search">
                <form>
                  <input type="text" name="search" placeholder="Search ...">
                  <button type="submit"><i class="ti-search" aria-hidden="true"></i></button>
                </form>
              </div>
              <div class="item">
                <h5>Select Brand</h5>
                <div class="filter-radio-group">
                  <div class="form-group">
                    <input type="radio" id="test1" name="radio-group_one">
                    <label for="test1">Lamborghini</label>
                  </div>
                  <div class="form-group">
                    <input type="radio" id="test2" name="radio-group_one">
                    <label for="test2">Aston Martin</label>
                  </div>
                  <div class="form-group">
                    <input type="radio" id="test3" name="radio-group_one">
                    <label for="test3">Bugatti</label>
                  </div>
                  <div class="form-group">
                    <input type="radio" id="test4" name="radio-group_one">
                    <label for="test4">Bentley</label>
                  </div>
                  <div class="form-group">
                    <input type="radio" id="test5" name="radio-group_one">
                    <label for="test5">Rolls-Royce</label>
                  </div>
                  <div class="form-group">
                    <input type="radio" id="test6" name="radio-group_one">
                    <label for="test6">Audi</label>
                  </div>
                  <div class="form-group">
                    <input type="radio" id="test7" name="radio-group_one">
                    <label for="test7">Ferrari</label>
                  </div>
                </div>
                <h5>Car Type</h5>
                <div class="filter-radio-group">
                  <div class="form-group">
                    <input type="radio" id="test8" name="radio-group_two">
                    <label for="test8">Luxury Cars</label>
                  </div>
                  <div class="form-group">
                    <input type="radio" id="test9" name="radio-group_two">
                    <label for="test9">Sport Cars</label>
                  </div>
                  <div class="form-group">
                    <input type="radio" id="test10" name="radio-group_two">
                    <label for="test10">SUVs</label>
                  </div>
                  <div class="form-group">
                    <input type="radio" id="test11" name="radio-group_two">
                    <label for="test11">Convertible</label>
                  </div>
                </div>
                <h5>Transmission</h5>
                <div class="filter-radio-group">
                  <div class="form-group">
                    <input type="radio" id="test12" name="radio-group_three">
                    <label for="test12">Automatic</label>
                  </div>
                  <div class="form-group">
                    <input type="radio" id="test13" name="radio-group_three">
                    <label for="test13">Manual</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Content -->
          <div class="col-lg-8 col-md-12 car-list">
            <div class="row">
              <div class="col-lg-6 col-md-12 mb-30">
                <div class="item">
                  <figure><img src="/assets/img/slider/7.jpg" alt="" class="img-fluid"></figure>
                  <div class="content">
                    <div class="cont">
                      <h3>Lamborghini Urus</h3>
                      <div class="features"><span><i class="omfi-door"></i> Doors</span>
                        <p>4</p>
                      </div>
                      <div class="features"><span><i class="omfi-passengers"></i> Passengers</span>
                        <p>5</p>
                      </div>
                      <div class="features"><span><i class="omfi-transmission"></i> Transmission</span>
                        <p>Auto</p>
                      </div>
                      <div class="features"><span><i class="omfi-luggage"></i> Luggage</span>
                        <p>2 Bags</p>
                      </div>
                      <div class="book mt-30">
                        <div>
                          <div class="price">$750 <span>/ day</span></div>
                        </div> <a href="car-details.html" class="button-4">Deatils</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 mb-30">
                <div class="item">
                  <figure> <img src="/assets/img/slider/8.jpg" alt="" class="img-fluid"> </figure>
                  <div class="content">
                    <div class="cont">
                      <h3>Aston Martin DBX</h3>
                      <div class="features"><span><i class="omfi-door"></i> Doors</span>
                        <p>4</p>
                      </div>
                      <div class="features"><span><i class="omfi-passengers"></i> Passengers</span>
                        <p>5</p>
                      </div>
                      <div class="features"><span><i class="omfi-transmission"></i> Transmission</span>
                        <p>Auto</p>
                      </div>
                      <div class="features"><span><i class="omfi-luggage"></i> Luggage</span>
                        <p>2 Bags</p>
                      </div>
                      <div class="book mt-30">
                        <div>
                          <div class="price">$600 <span>/ day</span></div>
                        </div> <a href="car-details.html" class="button-4">Deatils</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 mb-30">
                <div class="item">
                  <figure><img src="/assets/img/slider/9.jpg" alt="" class="img-fluid"></figure>
                  <div class="content">
                    <div class="cont">
                      <h3>Bugatti Mistral W16</h3>
                      <div class="features"><span><i class="omfi-door"></i> Doors</span>
                        <p>4</p>
                      </div>
                      <div class="features"><span><i class="omfi-passengers"></i> Passengers</span>
                        <p>5</p>
                      </div>
                      <div class="features"><span><i class="omfi-transmission"></i> Transmission</span>
                        <p>Auto</p>
                      </div>
                      <div class="features"><span><i class="omfi-age"></i> Age</span>
                        <p>25</p>
                      </div>
                      <div class="book mt-30">
                        <div>
                          <div class="price">$800 <span>/ day</span></div>
                        </div> <a href="car-details.html" class="button-4">Deatils</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 mb-30">
                <div class="item">
                  <figure> <img src="/assets/img/slider/11.jpg" alt="" class="img-fluid"> </figure>
                  <div class="content">
                    <div class="cont">
                      <h3>Bentley Bentayga</h3>
                      <div class="features"><span><i class="omfi-door"></i> Doors</span>
                        <p>4</p>
                      </div>
                      <div class="features"><span><i class="omfi-passengers"></i> Passengers</span>
                        <p>5</p>
                      </div>
                      <div class="features"><span><i class="omfi-transmission"></i> Transmission</span>
                        <p>Auto</p>
                      </div>
                      <div class="features"><span><i class="omfi-luggage"></i> Luggage</span>
                        <p>2 Bags</p>
                      </div>
                      <div class="book mt-30">
                        <div>
                          <div class="price">$600 <span>/ day</span></div>
                        </div> <a href="car-details.html" class="button-4">Deatils</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 mb-30">
                <div class="item">
                  <figure><img src="/assets/img/slider/12.jpg" alt="" class="img-fluid"></figure>
                  <div class="content">
                    <div class="cont">
                      <h3>Rolls Royce Cullinan</h3>
                      <div class="features"><span><i class="omfi-door"></i> Doors</span>
                        <p>4</p>
                      </div>
                      <div class="features"><span><i class="omfi-passengers"></i> Passengers</span>
                        <p>5</p>
                      </div>
                      <div class="features"><span><i class="omfi-transmission"></i> Transmission</span>
                        <p>Auto</p>
                      </div>
                      <div class="features"><span><i class="omfi-age"></i> Age</span>
                        <p>25</p>
                      </div>
                      <div class="book mt-30">
                        <div>
                          <div class="price">$900 <span>/ day</span></div>
                        </div> <a href="car-details.html" class="button-4">Deatils</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 mb-30">
                <div class="item">
                  <figure> <img src="/assets/img/slider/13.jpg" alt="" class="img-fluid"> </figure>
                  <div class="content">
                    <div class="cont">
                      <h3>Bentley Continental</h3>
                      <div class="features"><span><i class="omfi-door"></i> Doors</span>
                        <p>4</p>
                      </div>
                      <div class="features"><span><i class="omfi-passengers"></i> Passengers</span>
                        <p>5</p>
                      </div>
                      <div class="features"><span><i class="omfi-transmission"></i> Transmission</span>
                        <p>Auto</p>
                      </div>
                      <div class="features"><span><i class="omfi-luggage"></i> Luggage</span>
                        <p>2 Bags</p>
                      </div>
                      <div class="book mt-30">
                        <div>
                          <div class="price">$500 <span>/ day</span></div>
                        </div> <a href="car-details.html" class="button-4">Deatils</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Pagination -->
            <div class="row">
              <div class="col-md-12 mt-30 text-center">
                <ul class="pagination-wrap">
                  <li><a href="blog2.html#"><i class="ti-angle-left"></i></a></li>
                  <li><a href="blog2.html#">1</a></li>
                  <li><a href="blog2.html#" class="active">2</a></li>
                  <li><a href="blog2.html#">3</a></li>
                  <li><a href="blog2.html#"><i class="ti-angle-right"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>