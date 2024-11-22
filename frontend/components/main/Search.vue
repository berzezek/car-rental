<template>
  <!-- Booking Search -->
  <section id="bookingseach" data-scroll-index="1" class="background bg-img bg-fixed section-padding"
    data-overlay-dark="5" data-background="/assets/img/slider/2.jpg">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center mb-15">
          <div class="section-subtitle">Rent Now</div>
          <div class="section-title white">Book Auto Rental</div>
        </div>
      </div>
      <div class="booking-inner clearfix">
        <form action="#0" class="form1 brdr clearfix">
          <div class="col2 c3">
            <div class="select1_wrapper">
              <label>Choose Car Type</label>
              <div class="select1_inner">
                <select class="select2 select" style="width: 100%">
                  <option value="0">Choose Car Type</option>
                  <option value="1">All</option>
                  <option value="2">Luxury Cars</option>
                  <option value="3">Sport Cars</option>
                  <option value="4">SUVs</option>
                  <option value="5">Convertible</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col2 c4">
            <div class="select1_wrapper">
              <label>Pick Up Location</label>
              <div class="select1_inner">
                <select class="select2 select" style="width: 100%">
                  <option value="0">Pick Up Location</option>
                  <option value="1">Dubai</option>
                  <option value="2">Abu Dhabi</option>
                  <option value="3">Sharjah</option>
                  <option value="4">Alain</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col1 c1">
            <div class="input1_wrapper">
              <label>Pick Up Date</label>
              <div class="input1_inner">
                <input type="text" class="form-control input datepicker" placeholder="Pick Up Date" required>
              </div>
            </div>
          </div>
          <div class="col2 c5">
            <div class="select1_wrapper">
              <label>Drop Off Location</label>
              <div class="select1_inner">
                <select class="select2 select" style="width: 100%">
                  <option value="0">Drop Off Location</option>
                  <option value="1">Alain</option>
                  <option value="2">Sharjah</option>
                  <option value="3">Abu Dhabi</option>
                  <option value="4">Dubai</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col1 c2">
            <div class="input1_wrapper">
              <label>Return Date</label>
              <div class="input1_inner">
                <input type="text" class="form-control input datepicker" placeholder="Return Date">
              </div>
            </div>
          </div>
          <div class="col3 c6">
            <button type="submit" class="booking-button">Rent Now</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>