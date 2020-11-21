<template>
  <div>
    <!-- Start Hero -->
    <section class="hero text-center bg-secondary mb-4 text-white">
      <div class="container">
        <h1 class="font-28 fw-600 text-uppercase">
          Update Design Information
        </h1>
      </div>
    </section>
    <!-- End Hero -->

    <!-- Upload Shot -->
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body p-1" >
              <!-- <img :src="design.images.large" class="w-100 mb-4" /> -->
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <form class="auth-form" >
                <alert-success>
                  Design successfully updated
                </alert-success>
                <div class="form-group">
                  <base-input
                    field="title"
                    placeholder="Enter a title"
                  ></base-input>
                </div>
                <div class="form-group">
                  <base-textarea
                    field="description"
                    placeholder="Enter a description"
                  ></base-textarea>
                </div>
                <div class="form-group">
                </div>
                <template >
                  <div class="form-group custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="assign_to_team"
                    />
                    <label
                      class="custom-control-label"
                      value="true"
                      for="assign_to_team"
                    >
                      Assign to team
                    </label>
                  </div>
                  <div class="form-group">
                    <select
                      class="custom-select"
                    >
                      <option >Select a team</option>
                      <option
                      >
                      </option>
                    </select>
                  </div>
                </template>
                <div class="form-group custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="is_live"
                  />
                  <label
                    class="custom-control-label"
                    value="true"
                    for="is_live"
                  >
                    Publish this design
                  </label>
                </div>

                <div class="text-right">
                  <base-button :loading="form.busy">
                    Update Design
                  </base-button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Upload Shot -->
  </div>
</template>

<script>
export default {

};
</script>

<style></style>
