import React from 'react'
import { EFPCard } from "../Home/EFPSection";
import Image from "../../Assets/Images/team-department-card-image.jpg";

export default function DepartmentsSection() {
    return (
        // Using "Home > EFPSection > EFPCard" here
        <section className="team-section efp-section" style={{padding: "70px"}}>
            <div className="title">Our Departments</div>
            <div className="department-card-container">
                <EFPCard Image={Image} Title="All Departments" Content="Vertebrae of GDSC NSUT. From project managing to analysis alongwith the UX/Graphic designing, we construct and maintain high quality content." To="/team/all-departments" />
                <EFPCard Image={Image} Title="Web Development" Content="Utility of coding languages ( HTML,CSS, JavaScript and Python) to build websites and web applications. Responsible for site's technical aspects, performance and capacity." To="/team/web-development" />
                <EFPCard Image={Image} Title="App Development" Content="Create , evaluate , configure , update and enable the applications ( by using Kotlin/Java/C++ or Python etc.) as per the requirements of clients. Deployment and accomplishment of tasks in the best possible way. " To="/team/app-development" />
                <EFPCard Image={Image} Title="Competitive Programming" Content="Writes source code ( mainly C/C++ or Java , Python etc.)  to solve given mathematical and logical problems under provided constraints." To="/team/competitive-programming" />
                <EFPCard Image={Image} Title="Graphics" Content="Through creative visual sensations , showcasing the strategies that has to be done. Conceptualizing and presenting the ideas via illustrations, logos and other designs using softwares." To="/team/graphics" />
                <EFPCard Image={Image} Title="Content" Content="Pays heed to details meticulously. We plan , produce and promote by complementary and communication skills. Publishing the ideas on social media and other platforms." To="/team/content" />
                <EFPCard Image={Image} Title="Machine Learning" Content="Implementation of appropriate Machine learning (ML) algorithms which are capable of deep learning and making predictions." To="team/machine-learning" />
                <EFPCard Image={Image} Title="Operations" Content="The Department of Operations is in charge of making sure a company's processes and resources are working efficiently to produce and deliver products or services to members. It helps the company run smoothly and meet the needs of its members." To="/team/operations" />
            </div>
        </section>
    )
}
