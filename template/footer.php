<div class="pt-3">
  <div class="container">
    <hr>
    <div class="row pt-5 pb-4">
      <div class="col">
      </div>
    </div>
    <hr>
    <div class="row py-2 small mb-3">
      <div class="col-6">
        <?php echo qrcdr()->getString('title').' &copy; '.date('Y'); ?>
      </div>
      <div class="col-6 text-end">
        <!-- The link will be injected here by the JavaScript -->
         
      </div>
    </div>
    <div class="row py-2">
      <div class="col">
        <small>AhmedMohammed.</small>
      </div>
    </div>
    <!-- Add modals or any additional content here -->
    <?php
    if (file_exists(dirname(dirname(__FILE__)).'/'.$relative.'template/modals.php')) {
        include dirname(dirname(__FILE__)).'/'.$relative.'template/modals.php';
    }
    ?>
  </div>
</div>

<!-- Include the custom JS for the encrypted footer link -->
<script src="<?php echo $relative; ?>js/lib/jquery.min.js"></script>
<script src="<?php echo $relative; ?>js/dashmix.app.min-5.4.js"></script>
<script src="<?php echo $relative; ?>loader/waitMe.js"></script>
<script src="<?php echo $relative; ?>js/forms.js"></script>