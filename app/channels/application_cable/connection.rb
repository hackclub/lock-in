module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user = find_verified_user
    end

    private
      def find_verified_user
        if current_user = User.find_by(id: session["user_id"])

          current_user
        else
          reject_unauthorized_connection
        end
      end

      def session
        cookies.encrypted[Rails.application.config.session_options[:key]]
      end
  end
end
