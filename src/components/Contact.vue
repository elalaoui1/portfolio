<template>
  
  
    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">
    <h1># Contact</h1>
        <div class="row">
          <div class="">

            <form action="" method="post" ref="formemail" class="php-email-form" @submit.prevent="sendEmail">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Full Name" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div class="my-3 sent-success">
                <div class="sent-message" ref="sent-message"><i class='bx bx-message-check'></i>Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center mt-5"><button type="submit">Send Message <span class="loading" ref="loading"><img src="/assets/img/lo.gif" width="25" alt=""></span></button></div>
            </form>

          </div>

        </div>

      </div>
      </section><!-- End Contact Section -->
    

</template>

<script>
import emailjs from '@emailjs/browser';

export default {
methods:{
  sendEmail() {
      let paraams = {
        to_name: 'ABDELKARIM ELALAOUI',
        from_name: this.$refs.formemail.name.value,
        from_email: this.$refs.formemail.email.value,
        from_subject: this.$refs.formemail.subject.value,
        message: this.$refs.formemail.message.value,
        from_date: new Date().toLocaleString(),
      };
      this.$refs['loading'].style.display = 'inline-block';
      emailjs
        .send('service_276fkww', 'template_1kogxbq',paraams,'OgmFkH6ZVNdp5y6I2')
        .then(
          () => {
            this.$refs.formemail.reset();
            this.$refs['loading'].style.display = 'none';
            this.$refs['sent-message'].style.display = 'block';
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    },
},
mounted() {
    emailjs.init('OgmFkH6ZVNdp5y6I2'); // Initialize EmailJS when the component is mounted
  }
}
</script>

<style>
/*--------------------------------------------------------------
# Contact
--------------------------------------------------------------*/

#main{
  width: 900px;
}
.contact .container form input ,.contact .container form textarea{
  background: transparent;
  border: 2px solid #0563BB;
  color: white;
  font-weight: 700;
}
.contact .container form input::placeholder ,.contact .container form textarea::placeholder{
  color: white;
  font-weight: 600;
  font-size: 15px;
  font-style: italic;
}
.contact .container form button:hover{
  border: 1px solid #0563BB;

}
.contact .container h1{
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
    width: 100%;
    text-align: start;
    background: linear-gradient(to top,#9b59b6 , #3498db);
    background-clip: text;
    color: transparent;
    text-transform: capitalize;
  
  }
.contact .container form .sent-message .bx-message-check{
  color: rgb(4, 158, 4);
  font-size: 25px;
  position: relative;
  top: 5px;
  left: -10px;
}
.contact .container form .sent-message{
  color: rgb(4, 158, 4);
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  background: #1A1A1A;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  display: none;
  
}
.loading{
  display: none;
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  #main{
  width: 800px;
}
}
@media screen and (max-width: 768px) {
  #main{
  width: 350px;
}
}
</style>