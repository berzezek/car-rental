<template>
  <!-- RentNow Popup -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Booking Form</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="booking-box">
            <div class="booking-inner clearfix">
              <form method="post" action="#0" class="form1 contact__form clearfix">
                <!-- form message -->
                <div class="row">
                  <div class="col-12">
                    <div class="alert alert-success contact__msg" style="display: none" role="alert"> Your message was
                      sent successfully. </div>
                  </div>
                </div>
                <!-- form elements -->
                <div class="row">
                  <div class="col-lg-6 col-md-12">
                    <input name="name" type="text" placeholder="Full Name *" required>
                  </div>
                  <div class="col-lg-6 col-md-12">
                    <input name="email" type="email" placeholder="Email *" required>
                  </div>
                  <div class="col-lg-6 col-md-12">
                    <input name="phone" type="text" placeholder="Phone *" required>
                  </div>
                  <div class="col-lg-6 col-md-12">
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
                  <div class="col-lg-6 col-md-12">
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
                  <div class="col-lg-6 col-md-12">
                    <div class="input1_wrapper">
                      <label>Pick Up Date</label>
                      <div class="input1_inner">
                        <input type="text" class="form-control input datepicker" placeholder="Pick Up Date" required>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-12">
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
                  <div class="col-lg-6 col-md-12">
                    <div class="input1_wrapper">
                      <label>Return Date</label>
                      <div class="input1_inner">
                        <input type="text" class="form-control input datepicker" placeholder="Return Date">
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 form-group">
                    <textarea name="message" id="message" cols="30" rows="4" placeholder="Additional Note"></textarea>
                  </div>
                  <div class="col-lg-12 col-md-12">
                    <button type="submit" class="booking-button mt-15">Rent Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>