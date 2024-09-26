import React from 'react'
import styled from 'styled-components'
import { Search, ChevronRight } from 'lucide-react'

const Container = styled.div`
  width: 100vw;
  min-height: 848px;
  padding: 64px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding-left: 14%
`

const Title = styled.h1`
  font-size: 64px;
  font-weight: 500;
  line-height: 64px;
  text-align: left;
  color: #FFFFFF;
`

const Content = styled.div`
  display: flex;
  gap: 64px;
`

const CityList = styled.div`
  width: 360px;
  hight: 720px;
  display: flex;
  flex-direction: column;
  gap: 64px;
`

const SearchContainer = styled.div`
  position: relative;
`

const SearchInput = styled.input`
  // width: 100%;
  padding: 12px 16px;
  background-color: transparent;
  border: 1px solid #333;
  border-radius: 4px;
  color: white;
  font-size: 1rem;

  &::placeholder {
    color: #666;
  }

  &:focus {
    outline: none;
    border-color: #c10682;
  }
`

const SearchIcon = styled(Search)`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
`

const CityListUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 360px;
  height: 720px;
  gap: 48px;
  opacity: 0px;

`

const CityListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #333;
  cursor: pointer;

  &:hover {
    background-color: #111;
  }
`

const MapContainer = styled.div`
  width: 640px;
  height: 640px;
  background-color: #D9D9D9;
`

export default function IGCOffices() {
  return (
    <Container>
      <Title>IGC Offices</Title>
      <Content>
        <CityList>
          <SearchContainer>
            <SearchInput type="text" placeholder="Enter city" />
            <SearchIcon size={20} />
          </SearchContainer>
          <CityListUl>
            {Array(8).fill(null).map((_, index) => (
              <CityListItem key={index}>
                <span>City Name</span>
                <ChevronRight size={20} color="#D9D9D9" />
              </CityListItem>
            ))}
          </CityListUl>
        </CityList>
        <MapContainer />
      </Content>
    </Container>
  )
}