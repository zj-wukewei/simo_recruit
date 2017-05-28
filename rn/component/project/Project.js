/**
 * Created by hzwukewei on 2017-5-27.
 */

import React, {Component} from "react";
import {Image, Text} from "react-native";
import type {Project} from "../../flowtype";

type Props = {
  list: Array<Project>,
  hasMore: boolean,
  loginCallback: (pn: string, popleGroup: string, sicknessStatus: string,
                  sicknessType: string, searchContent: string) => void
};

class Project extends Component {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Text>
        this is a project
      </Text>
    )
  }
}

export default Project;