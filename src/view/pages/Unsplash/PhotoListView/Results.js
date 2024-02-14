import React, { useState, } from "react"
import clsx from "clsx"
import PerfectScrollbar from "react-perfect-scrollbar"
import Table from "@mui/joy/Table"
import { Link } from "react-router-dom"
import {
  ArrowRight as ArrowRightIcon,
  Search as SearchIcon
} from "react-feather"
import {
  Box,
  Card,
  InputAdornment,
  IconButton,
  SvgIcon,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material"
import Button from "@mui/material/Button"
import VisibilityIcon from "@mui/icons-material/Visibility"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogActions from "@mui/material/DialogActions"

import {
  sortOptions,

} from "../../../../others/helpers/InputPhotoOptions"
import { applyFilters } from "./TableResultsHelpers"

const Results = ({ className, results, result, ...rest }) => {
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(25)
  const [query, setQuery] = useState("")
  const [sort, setSort] = useState(sortOptions[0].value)
  const [isProfileDialogOpen, setIsProfileDialogOpen] = useState(false)
  const [selectedResult, setSelectedResult] = useState(null)

  const handleQueryChange = event => {
    event.persist()
    setQuery(event.target.value)
  }

  const handleSortChange = (event) => {
    event.persist();
    setSort(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage)
  }

  const handleLimitChange = event => {
    setLimit(parseInt(event.target.value))
  }

  const applyPagination = (results, page, limit) => {
    const startIndex = page * limit
    const endIndex = startIndex + limit
    return results.slice(startIndex, endIndex)
  }
  const applySorting = (results, sortingOption) => {
    const [field, order] = sortingOption.split("|");
    const apiFieldMap = {
      created: "created_at",
    };
    const mappedField = apiFieldMap[field] || field;
    return [...results].sort((a, b) => {
      if (order === "asc") {
        return a[mappedField].localeCompare(b[mappedField]);
      } else {
        return b[mappedField].localeCompare(a[mappedField]); 
      }
    });
  };
  const filteredResults = applyFilters(results, query)
  const paginatedResults = applyPagination(filteredResults, page, limit)
  const sortedResults = applySorting(paginatedResults, sort);
  
  return (
    <Card className={clsx("", className)} {...rest}>
      <Box p={2}>
        <Box display="flex" alignItems="center">
          <TextField
            className=""
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon fontSize="small" color="action">
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              )
            }}
            onChange={handleQueryChange}
            placeholder="Search photographers"
            value={query}
            variant="outlined"
          />
          <Box flexGrow={1} />
          <TextField
            label="Sort By"
            name="sort"
            onChange={handleSortChange}
            select
            SelectProps={{ native: true }}
            value={sort}
            variant="outlined"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Box>
      </Box>

      <PerfectScrollbar>
        <Box minWidth={1200}>
          <Table color="danger">
            <TableHead>
              <TableRow>
                <TableCell>Photgrapher Name</TableCell>
                <TableCell>Created at</TableCell>
               
                <TableCell>Photographer Portfolio</TableCell>
                <TableCell> 
                  No. of likes
                </TableCell>
                <TableCell align="right">Photo Detail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedResults
                .map(result => {
                  const handleProfileDialogOpen = selectedId => {
                    setSelectedResult(selectedId)
                    setIsProfileDialogOpen(true)
                  }

                  const handleProfileDialogClose = () => {
                    setIsProfileDialogOpen(false)
                  }

                  return (
                    <TableRow key={result.id}>
                      <TableCell>               
                        {result.user.name}
                        <VisibilityIcon
                          onClick={() => handleProfileDialogOpen(result.id)}
                        />  
                        </TableCell>
                      <Dialog
                        open={isProfileDialogOpen}
                        onClose={handleProfileDialogClose}
                      >
                        <DialogTitle>Profile Details</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            <Box minWidth={700}>
                              <Table>
                                <TableHead>
                                  <TableRow>
                                    <TableCell>Profile name</TableCell>
                                    <TableCell>Location</TableCell>
                                    <TableCell>Total likes</TableCell>
                                    <TableCell>Twitter</TableCell>
                                    <TableCell>Portfolio</TableCell>
                                    <TableCell>Profile Image</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                {sortedResults
                                  .filter(result => result.id === selectedResult)
                                  .map((selectedResult,index) => {
                                    return (
                                      <TableRow key={index}>
                                        <TableCell>
                                          {selectedResult.user.name}
                                        </TableCell>
                                        <TableCell>
                                          {selectedResult.user.location}
                                        </TableCell>
                                        <TableCell>{selectedResult.user.total_likes}</TableCell>
                                        <TableCell>{selectedResult.user.twitter_username}</TableCell>
                                        <TableCell>
                                        <a
                                          href={selectedResult.user.portfolio_url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          View Portfolio
                                        </a>
                                        </TableCell>
                                        <TableCell>
                                        <img
                                          src={selectedResult.user.profile_image.medium}
                                          alt="Profile"
                                          style={{ width: 32, height: 32 }}
                                        />
                                      </TableCell>
                                      </TableRow>
                                    )
                                  })}
                                </TableBody>
                              </Table>
                            </Box>
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button
                            variant="contained"
                            className=""
                            color="secondary"
                            onClick={handleProfileDialogClose}
                          >
                            Close
                          </Button>
                        </DialogActions>
                      </Dialog>
                      <TableCell>
                        {new Date(result.created_at).toLocaleString()}
                      </TableCell>
                      <TableCell>
                      <a
                      href={result.user.links.html}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     View Photographer's Portfolio
                    </a>
                      </TableCell>
                      <TableCell>
                        {result.likes} likes
                      </TableCell>

                      <TableCell>
                        <IconButton>
                          <Link to={`/photos/${result.id}`}>  
                            <ArrowRightIcon />
                          </Link>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={filteredResults.length}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </Box>
      </PerfectScrollbar>
    </Card>
  )
}

export default Results