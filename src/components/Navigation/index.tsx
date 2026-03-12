import Container from "../Container";
import LinkButton from "./LinkButton";

export default function Navigation() {
  return (
    <nav class='w-full h-fit bg-secondary-base'>
      <Container>
        <div class='w-full h-fit px-8 py-8 flex flex-row items-center justify-between'>
          <a href='/home'>
            <img src='/logo.png' />
          </a>

          <ul class='flex flex-row items-center justify-center gap-8'>
            <li>
              <LinkButton
                caption='Services'
                link='/services'
              />
            </li>
            <li>
              <LinkButton
                caption='Portfolio'
                link='/portfolio'
              />
            </li>
            <li>
              <LinkButton
                caption='About Us'
                link='/about'
              />
            </li>
            <li>
              <LinkButton
                caption='Chat With Us'
                link='/contact'
              />
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
