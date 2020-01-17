class HomeController < ApplicationController
  def index
    @contact = Home.new(params[:home])
  end

  def create
    @contact = Home.new(params[:home])
    @contact.request = request
    respond_to do |format|
      if @contact.deliver
        # re-initialize Home object for cleared form
        @contact = Home.new
        format.html { render 'index'}
        format.js   { flash.now[:success] = @message = "Merci Beaucoup ! On reste en contact" }
      else
        format.html { render 'index' }
        format.js   { flash.now[:error] = @message = "hmmm... Petit problème" }
      end
    end
  end

  def download_pdf
    send_file "#{Rails.root}/public/HugoValla_CV2020.pdf", type: "application/pdf", x_sendfile: true
  end
  
end
