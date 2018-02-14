# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


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
