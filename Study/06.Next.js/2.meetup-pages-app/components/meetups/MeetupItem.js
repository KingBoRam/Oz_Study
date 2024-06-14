import React from "react";
import Card from "../ui/Card";
import Image from "next/image";
import {useRouter} from "next/router";
import classes from "./MeetupItem.module.css";

const MeetupItem = ({id, image, title, address}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/" + id);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image
            src={image}
            width={0}
            height={0}
            sizes="100vw"
            style={{width: "100%", height: "auto"}}
            alt={title}
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={handleClick}>자세히보기</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
