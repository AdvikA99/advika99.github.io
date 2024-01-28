import React, { ReactComponentElement } from 'react';
import './MainSection.css';
import CategoryCard from './CategoryCard/CategoryCard';
import PeopleIcon from '@mui/icons-material/People';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ForumIcon from '@mui/icons-material/Forum';
import HomeIcon from '@mui/icons-material/Home';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import WorkIcon from '@mui/icons-material/Work';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';
import EventCard from './EventCard/EventCard';

export interface Category {
  name: string,
  subCategories: string[],
}

const categories : Category[] = [
  {
    name: "Community",
    subCategories: ["Activities", "Artists", "Childcare", "Classes", "Events", "General", "Groups", "Local News", "Lost & Found", "Missed Connections", "Musicians", "Pets", "Politics", "Rants & Raves", "Rideshare", "Volunteers"]
  },
  {
    name: "Discussion Forums",
    subCategories: ["Apple", "Arts", "Atheist", "Autos", "Beauty", "Bikes", "Celebs", "Comp", "Cosmos", "Diet", "Divorce", "Dying", "Eco", "Feedbk", "Film", "Fixit", "Food", "Frugal", "Gaming", "Garden", "Haiku", "Help", "History", "Housing", "Jobs", "Jokes", "Legal", "Manners", "Marriage", "Money", "Music", "Open", "Parent", "Pets", "Philos", "Photo", "Politics", "Psych", "Recover", "Religion", "Rofo", "Science", "Spirit", "Sports", "Super", "Tax", "Travel", "Tv", "Vegan", "Words", "Writing"]
  },
  {
    name: "For Sale",
    subCategories: ["Antiques", "Appliances", "Arts & Crafts", "Atv/Utv/Snow", "Auto Parts", "Aviation", "Babies & Kids", "Barter", "Beauty & Health", "Bike Parts", "Bikes", "Boat Parts", "Boats", "Books", "Business", "Cars & Trucks", "Cd/Dvd/Vhs", "Cell Phones", "Clothes & Acc", "Collectibles", "Computer Parts", "Computers", "Electronics", "Farm & Garden", "Free", "Furniture", "Garage Sale", "General", "Heavy Equipment", "Household", "Jewelry", "Materials", "Motorcycle Parts", "Motorcycles", "Music Instruments", "Photo & Video", "Rvs & Campers", "Sporting", "Tickets", "Tools", "Toys & Games", "Trailers", "Video Gaming", "Wanted", "Wheels & Tires"]
  },
  {
    name: "Gigs",
    subCategories: ["Computer", "Creative", "Crew", "Domestic", "Event", "Labor", "Talent", "Writing"]
  },
  {
    name: "Housing",
    subCategories: ["Apts/Housing", "Housing Swap", "Housing Wanted", "Office/Commercial", "Parking/Storage", "Real Estate for Sale", "Rooms/Shared", "Rooms Wanted", "Sublets/Temporary", "Vacation Rentals"]
  },
  {
    name: "Jobs",
    subCategories: ["Accounting/Finance", "Admin/Office", "Architect/Engineering", "Art/Media/Design", "Biotech/Science", "Biz/Management", "Customer Service", "Education", "Etc/Misc", "Food/Bev/Hosp", "General Labor", "Government", "Human Resources", "Legal / Paralegal", "Manufacturing", "Marketing/PR", "Medical/Health", "Nonprofit Sector", "Real Estate", "Retail/Wholesale", "Sales/Business Development", "Salon/Spa/Fitness", "Security", "Skilled Trade/Craft", "Software/QA/DBA", "Systems/Network", "Technical Support", "Transport", "Tv/Film/Video", "Web/Info Design", "Writing/Editing"]
  },
  {
    name: "Resumes",
    subCategories: ["Agent", "Asisstant", "Baby Sitter", "Chef", "Dog Walker", "Driver", "Editor", "Gardener", "Lawyer", "Painter", "Programmer", "Publicist", "Receptionist", "Secretary"]
  },
  {
    name: "Services",
    subCategories: ["Automotive", "Beauty", "Cell/Mobile", "Computer", "Creative", "Cycle", "Event", "Farm & Garden", "Financial", "Health & Wellness", "Household", "Labor/Moving", "Legal", "Lessons", "Marine", "Pet", "Real Estate", "Skilled Trade", "SM Business Ads", "Travel/Vacactions", "Write/Edit"]
  }
];

const getCategoryIcon = (categoryName : string) => {
  switch (categoryName) {
    case "Community":
      return <PeopleIcon/>;
    case "Services":
      return <HandshakeIcon/>;
    case "Discussion Forums":
      return <ForumIcon/>;
    case "Housing":
      return <HomeIcon/>;
    case "For Sale":
      return <PointOfSaleIcon/>;
    case "Jobs":
      return <WorkIcon/>;
    case "Gigs":
      return <AttachMoneyIcon/>;
    case "Resumes":
      return <DescriptionIcon/>;
  }
};

function MainSection() {
  return (
    <div id="mainSection">
      <div id="categoriesSection">
        {categories.map((categoryData) => (
          <CategoryCard key={categoryData.name} data={categoryData} icon={getCategoryIcon(categoryData.name)}/>
        ))}
      </div>
      <EventCard/>
    </div>
  );
}

export default MainSection;
