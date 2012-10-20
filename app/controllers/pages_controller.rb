class PagesController < ApplicationController
	require 'net/http'

	def home
		http = Net::HTTP.new('api.filepicker.io')
		response_v0 = http.request_get('/v0/filepicker.js')
		@status_v0 = response_v0.code == '200'

		response_v1 = http.request_get('/v1/filepicker.js')
		@status_v1 = response_v1.code == '200'
	end

end
