import CommunityCard from "../components/Community";

function CommunityPage() {
  return (
    <>
      <header>
        <div className="container-header">
          <div className="left">
            <h1 id="judul">Community</h1>
            <p id="isi">
            EarlEdu is an alternative website service that is used to help toddlers get early learning with the aim of advancing 
            the welfare of the Indonesian people.
            <br></br>
            With EarlEdu, parents can choose their child's name, join the community, and teach their child to read the alphabet.
            <br></br>
            Come on, what are you waiting for? Join the community now!
            </p>
          </div>
          <div className="right">
            <img src="/img/com-canvas.svg" alt="canvas"/>
          </div>
        </div>
      </header>
      <main>
        <div className="community-links" id="links">
          <div className="wrapper">
            <CommunityCard
              link="https://t.me/+rcyW4FKuQZA1NmQ1"
              image="/img/com-mompreneurs.svg"
              title="Mompreneurs"
              description="Join this community if you are a Mompreneurs"
            />
            <CommunityCard
              link="https://t.me/+rcyW4FKuQZA1NmQ1"
              image="/img/com-pregnant.svg"
              title="Pregnant"
              description="Join this community if you are a Pregnant"
            />
            <CommunityCard
              link="https://t.me/+rcyW4FKuQZA1NmQ1"
              image="/img/com-singlemom.svg"
              title="Single Mom"
              description="Join this community if you are a Single Mom"
            />
            <CommunityCard
              link="https://t.me/+rcyW4FKuQZA1NmQ1"
              image="/img/com-workingmom.svg"
              title="Working Mom"
              description="Join this community if you are a Working Mom"
            />
            <CommunityCard
              link="https://t.me/+rcyW4FKuQZA1NmQ1"
              image="/img/com-specialkids.svg"
              title="Special Kids"
              description="Join this community if you have a Special Kids"
            />
            <CommunityCard
              link="https://t.me/+rcyW4FKuQZA1NmQ1"
              image="/img/com-newborn.svg"
              title="Newborn"
              description="Join this community if you have a Newborn"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default CommunityPage;
