json.array! @posts do |post|
  json.partial! 'api/posts/post_info', locals: { post: post }
end