require 'faker'

# tags initial seed
mu = Tag.create(name: 'Music')
ph = Tag.create(name: 'Photography')
fb = Tag.create(name: 'Food/Beverage')
wd = Tag.create(name: 'Web Design')
fi = Tag.create(name: 'Film/Video')
sa = Tag.create(name: 'Sales')
ot = Tag.create(name: 'Other')

# fake user for testing
jt = User.create(username: "jtregoat", email: "jules@jules.nyc")

# fake gigs for testing
gig = Gig.create(title: "Server Position Available", body: "Must have weekend availability.", poster_id: jt.id, tag_id: fb.id)

gig.comments << Comment.create(content: "this job is dope!!!", user_id: jt.id, gig_id: gig.id)

# 100 users, 10000 gigs

100.times do
  new_user = User.create(username: Faker::Name.unique.name, email: Faker::Internet.unique.email)
  100.times do
    random_tag = Random.rand(1..7)
    Gig.create(title: Faker::Job.title, body: Faker::Lorem.paragraph, tag_id: random_tag, poster_id: new_user.id)
  end
end

# generate 10 comments from 10 random users per gig

Gig.all.each do |gig|
  10.times do
    random_user = User.find(Random.rand(1..100))
    Comment.create(content: Faker::Lorem.sentence, user_id: random_user.id, gig_id: gig.id)
  end
end
